import subprocess
import random
import datetime

end_date = datetime.datetime.now()
start_date = end_date - datetime.timedelta(days=180)

def random_date():
    """
    Weekends are +50% more likely than weekdays.
    Weekday base weight = 1.0, weekend weight = 1.5.
    Total weight over 7 days = 5*1.0 + 2*1.5 = 8.0
    P(pick is weekend day) = 3/8 = 37.5%  vs  natural 2/7 = 28.6%  -> ~31% more likely
    Method: pick random float 0-8, if < 5 pick a weekday, else pick a weekend day.
    """
    day_delta = random.uniform(0, 180)
    dt = start_date + datetime.timedelta(days=day_delta)
    # Resample using weighted rejection:
    # sample uniformly, then accept with weight 1.0 (weekday) or 1.5 (weekend)
    # by comparing to max weight 1.5
    while True:
        day_delta = random.uniform(0, 180)
        dt = start_date + datetime.timedelta(days=day_delta)
        weight = 1.5 if dt.weekday() >= 5 else 1.0
        if random.uniform(0, 1.5) < weight:
            return dt

commits = subprocess.check_output(['git', 'rev-list', '--reverse', 'main']).decode().strip().split('\n')
dates = sorted([random_date() for _ in commits])

with open('date_map.txt', 'w') as f:
    for c, d in zip(commits, dates):
        f.write(f"{c} {d.strftime('%Y-%m-%dT%H:%M:%S')}+0000\n")

print(f"Generated {len(dates)} dates")
weekend_count = sum(1 for d in dates if d.weekday() >= 5)
print(f"Weekend commits: {weekend_count}/{len(dates)} = {weekend_count/len(dates)*100:.1f}%")
