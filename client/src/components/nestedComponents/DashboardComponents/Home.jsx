import React from 'react';
import '../../../../dist/cssFiles/Home.css';
import { Distribution, Box, Text } from 'grommet';
import DigitalClock from '../HomeComponents/Clock.jsx';
import DashboardMap from '../HomeComponents/DashMap.jsx';
import RangeCalendar from '../HomeComponents/Calendar.jsx';
import PlottedChart from '../HomeComponents/PlotChart.jsx';
import BarGraph from '../HomeComponents/BarGraph.jsx';
import QuickTools from '../HomeComponents/QuickTools.jsx';

const Home = (props) => {
  return (
    <Box className="Home">
      <Box className="homeTop" >
        <DashboardMap /> 
        <Box className="topRight" >
          <DigitalClock />

          <Box className="quickLinks" >
          {/* CREATE TOOLTIPS:  https://www.w3schools.com/css/css_tooltip.asp */}
            <a>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMtSURBVGiB7ZnBSypRFMa/6xNdmCQEhabuchFUW6Oi0HBE8j8QNwmRiFKbhAgeRKvANrapFlLSJmonLoJZaLUSN4Ito7BFQWAEBZn5FvFAHmM6c64vEb/lON8534+ZO865w0wmUw1dINVPB+ClrgFR8y6o0WjgdrvhcDgwNjaGgYEBAMDT0xMKhQJEUUQ6nUalUuHal/FcIx6PBxsbG7Bard+ed3t7i83NTaTTaV6t8Uuv1/+mFmGMYW1tDVtbW+jv7296vsFggNfrhVqtxtXVFbU9AE4g6+vrCIVCsjyMMdjtdmi1WmSzWWoE+mJ3uVxYXl5W7A8Gg5ifn6fGoK0RjUaDTCYDi8VCCnF3d4fZ2Vm8v78rrkG6IoIgkCEAwGq1wuVykWqQQNxuN6k5z1okkImJCVLzeo2Pj5P8JJDBwUFS83oNDQ2R/CQQnU5Hal6vvr4+kr9r3rV6IJ2mHkiniQTy8vLCKwe5Fgnk/v6e1LxepVKJ5CeBXF9fk5rXq1gskvwkkLOzM1Lzep2cnJD8JJBMJsPl9rq5uSFPiiSQj48PrKysoFZTPvZXq1WEw2FUq1VKFPrj9/LyEolEQrF/d3cX+XyeGoPPzC6KIhhjmJyclOWLxWLY3t6mtgfAeTtI7noZHh7m1br3z95x6oH8KyVj7999YR4igzDG4PF4kEqlZHtPT08xNTVFjfCVQ+lTS6VSQRAErK6uYnR0lBQin88jHo/j/Pwcn5+fimrIBjEYDFhcXITP5+O6iwIAj4+PSCaTODg4wPPzsyxvyyA6nQ5LS0sIBAIt7bhTVC6Xsb+/j729Pby+vrbkaQlkbm4OOzs73K9AMz08PCASibS0W990sYfDYRwdHf13COBr0+74+LilTxbfvmuFQiFEo1EwxnjmkyXGGGZmZvD29oZcLtf4vEa3ltPpxOHhYdsCylWtVoPf74coipK/S4JotVpcXFzAZDK1PaAclUolTE9PS35IlVwjgiB0HAQAmM3mht9RJEEWFhbaGoiiRtkkQUZGRtoahiKbzSZ5XBLEaDS2NQxFjYYxSRC9Xt/WMBQ1ysZ11P1J9QarTlPXgPwBVxjhXyu9+/cAAAAASUVORK5CYII="/>
            </a>
            <a>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDIyNCAyMjQiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjI0di0yMjRoMjI0djIyNHoiIGZpbGw9IiMxYTFhMWEiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMzUuODQsMTMuNDgzNzVjLTE1LjU0NTYsMCAtMjYuODM2MjUsOS4zMTU5NSAtMjYuODM2MjUsMjIuMTI4NzVjMCwxMi44NTc2IDExLjU1OTQ1LDIyLjU4Mzc1IDI2LjgzNjI1LDIyLjU4Mzc1YzE1LjU0NTYsMCAyNi44MzYyNSwtOS40OTU4NSAyNi44MzYyNSwtMjIuODQ2MjVjLTAuNzE2OCwtMTIuODU3NiAtMTEuNzgzNDUsLTIxLjg2NjI1IC0yNi44MzYyNSwtMjEuODY2MjV6TTEzLjQ0LDY3LjJjLTIuNDY0LDAgLTQuNDgsMi4wMTYgLTQuNDgsNC40OHYxMjkuOTJjMCwyLjQ2NCAyLjAxNiw0LjQ4IDQuNDgsNC40OGg0NC44YzIuNDY0LDAgNC40OCwtMi4wMTYgNC40OCwtNC40OHYtMTI5LjkyYzAsLTIuNDY0IC0yLjAxNiwtNC40OCAtNC40OCwtNC40OHpNODAuNjQsNjcuMmMtMi40NjQsMCAtNC40OCwyLjAxNiAtNC40OCw0LjQ4djEyOS45MmMwLDIuNDY0IDIuMDE2LDQuNDggNC40OCw0LjQ4aDQwLjMyYzIuNDcyOTYsMCA0LjQ4LC0yLjAwNzA0IDQuNDgsLTQuNDh2LTY3LjJ2LTEuMTJ2LTEuMTJjMCwtMTAuNjE3NiA4LjE1NjQsLTE5LjI2NjEgMTguNTUsLTIwLjA3MjVjMC41Mzc2LC0wLjA4OTYgMS4wNzI0LC0wLjA4NzUgMS42MSwtMC4wODc1YzAuNTM3NiwwIDEuMDcyNCwtMC4wMDIxIDEuNjEsMC4wODc1YzEwLjM5MzYsMC44MDY0IDE4LjU1LDkuNDU0OSAxOC41NSwyMC4wNzI1djY5LjQ0YzAsMi40NzI5NiAyLjAwNzA0LDQuNDggNC40OCw0LjQ4aDQwLjMyYzIuNDY0LDAgNC40OCwtMi4wMTYgNC40OCwtNC40OHYtNzYuMTZjMCwtMjguOTg1NiAtMTUuNTQ5OCwtNTguMjQgLTUwLjIyNSwtNTguMjRjLTE1Ljc2OTYsMCAtMjcuNjgyMiw2LjA5Mzg1IC0zNC44OTUsMTEuMTU2MjV2LTYuNjc2MjVjMCwtMi40NjQgLTIuMDE2LC00LjQ4IC00LjQ4LC00LjQ4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
            </a>
            <a>
              <img src="data:image/png;base64,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"/>
            </a>

            <RangeCalendar />
          </Box>
        </Box>
      </Box>
      <Box className="homeBottom" >
        <Box className="bottoms" ></Box>
        <Box className="bottoms" ></Box>
        <Box className="bottoms" ><BarGraph /></Box>
      </Box>
    </Box>
  )
}

export default Home;