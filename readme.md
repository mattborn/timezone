# Times Own

A [mondegreen](https://en.wikipedia.org/wiki/Mondegreen). Several actually.

After starting on this, I found these tools that already exist that get the job done:

- [Time and Date Meeting Planner](https://www.timeanddate.com/worldclock/meetingtime.html?p1=220&p2=31)
- [TimezoneWizard](https://timezonewizard.com)

## Logic

Some sense-making exercises b/c I’m not going to do [this](https://stackoverflow.com/questions/50288816/determine-which-part-of-an-interval-overlaps-a-given-weekday-in-a-given-time-zon).

- If Honolulu (-9) and Denver (-6) and London (+1), all DST, and in any earliest is 8am and latest (start) is 8pm, then (no overlapping working hours) while expanded hours are 12–2pm Mountain, 8–10am Hawaii, and 6–8pm British.
- If San Francisco (-7) and Salt Lake (-6) and New York (-4) and Barcelona (+2), all DST, and in any earliest is 8am and latest (start) is 8pm, then working hours are 9–10am Mountain, 8–9am Pacific, and 5-6pm Barcelona while expanded hours are 9am–1pm Mountain, 8am–12pm Pacific, 11am–3pm Eastern, and 5–9pm Barcelona.
- If Honolulu (-9) and Kyiv (+3), all DST, and in any earliest is 8am and latest (start) is 8pm, then (no overlapping working hours) while (no overlapping expanded hours).

## Formula

`hours = [min - min(), max - max()]`

Example:
* 8 - -1 (Pacific) = 9
* 21 - +8 (Barcelona) = 13

So that’s only half of the formula. We also need to get the distance from current in both directions to normalize the offsets.

`hours = earliest + current - min, max = latest + current - max`

Example:
* 8 + -6 MT - -7 PT = 9
* 21 + -6 MT - -5 CT = 20