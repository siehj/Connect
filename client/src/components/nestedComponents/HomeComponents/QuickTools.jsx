import React from 'react';
import { Box } from 'grommet';

const QuickTools = (props) => {
  return (
    <div style={{ height: "inherit" }} >
      <div className="quickToolsRows" >
        <Box className="qtIcon" alignContent="center" border="all" round="small" pad="xsmall" >
          <a>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACHSURBVGiB7dhBCoAgEEDRjE4x3v9onqPWtRJJ/Qz/7dpUn0GYKhFxHwmcu1/gL4bQGEJjCE2akGvmzVtrr+ta67RnpZmIITSG0BhCYwiNITSG0JSe30HfLXa1nq05zUQMoek6I6P8QhxgCI0hNIbQGEJjCI0hNFO335XSTMQQGkNoDKFJE/IAuFwOlzYt90cAAAAASUVORK5CYII="/>         
          </a>
        </Box>
        <Box className="qtIcon" alignContent="center" border="all" round="small" pad="xsmall" >
          <a>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGWSURBVGiB7ZcxqsJAEIb/mCCeYfUEomUKO8kNbKwtBLH1ABaC4AWstdTCC6Q3LKlTpbOwsxErQZ3XPOTJS9Bo1izLfJAisAP/v7PM8FtBEFCr1UIWttstut1uphrVWERE7xRWq9W8tXxEqWgBefGSkdPphM1mo1rLRzjPDpzPZ/R6PUgpcTgcMBgMvqErMw8dmc/n2O129//L5YLhcAgpJWq1GjqdztcFvgz9sl6vSQhBzWaTwjCk2+1Go9GIhBBUr9cpjmP6ixAi8SuK+9Q6Ho/o9/sIggDlchntdhu+76NSqWC1WsF13YcLSJta+/1e/e0n8DB+r9crxuMxlsslAMBxHCwWC3ie969Q6/Fr2zam0ykmkwls28ZsNks0oSOpCzGKIjQajdRC3TrCm103SmEYZi6SUiqQ8hmWEOKtp6Ub5jytogXkhTFGLE6IvEfUwAlRNzghckJUBCdE3eCEqJsRczY7J0TNMOdpFS0gL4wxwgmR94gi2IhuGGPkaWbPSlHBijuSRlFj2ZiOsBHdMMeIKQnxB7FKIsvcRWyTAAAAAElFTkSuQmCC"/> 
          </a>
        </Box>
      </div>
      <div className="quickToolsRows" >
        <Box className="qtIcon" alignContent="center" border="all" round="small" pad="xsmall" >
          <a>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQFSURBVGiB7ZlfKLtfHMffz+PJ/yhcUbKWWO4wWuFiKLUUuRBSW80VSdKIlRu1XCtcTHPhf3JDtpSFpbAbDLlQmmxZYpRif/C70O/b9/dzHpzn2YOLvWsX+5xzPu/Pa+ecPWdnTGZm5isiJI7joFQqUVFRgdLSUmRkZCAtLQ0syyIQCOD4+Bgulws2mw0HBweRsgUAMJEA4TgODQ0N6OzsRE5OzpfGHB0dYWRkBCsrK2LtAUQARC6XY2xsDAUFBYLGOxwO9PT04PLyUkwZYMUM1mg0sFqtgiEAoLy8HKurqygpKRFTinCQmpoajI6OIikpSVQBAJCeno75+XkolUrBOQQtrfz8fCwvLyMxMVGwMUnX19fQaDTweDzUY6lBGIbB0tLSh0vB5XJhamoKW1tbuL+/B8uykMlkUKlUaGxshFwu5x1rt9vR2tpKU9JbXbQgtbW1GB8fJ7YFg0EMDAxgZmaGdzzHcdDpdDAajeA4jthHp9NhbW2Npiw6EJZl4XA4iF+x4XAYOp0Odrv9S7nUajUsFgsRxul0oq6u7qtlvdVG01mlUvE+J4aGhr4MAbwtIZPJRGwrLi6GTCajKY0OpLKykhg/OzuDxWKhMgYAs9mM8/Pzd3GGYVBVVUWViwqksLCQGJ+enkY4HKYyBt6W49zcHLGN9tlEBcI33RsbG1Smf2t7e5sYz83NpcpDBZKamkqMe71eKtO/5Xa7ifGUlBSqPFQgNzc372JerxcPDw9Upl9RfHw8VX8qEIPBAJ/P9+f91dUVent7qQz/r+zsbGKc9KF9JPITiUfr6+u8G16oysrKiHHa5Srq9CtWHMehpaWF2OZ0Oqly/ShIR0cH79La3NykyvVjINXV1eju7ia27e/v4+TkhCrft4OwLIu2tjaYzWbExMQQ+/AdSj8S1WYXK4VCgeHhYRQVFfH2cTgcgn7Hf9uMaLVa2Gy2DyH8fj8MBgNeX+mvEb5lRvr7+9He3v5hn1AoBL1ej4uLC0Eeks+IXq//FMLv96OpqQk7OzuCfSJyr8WnvLw8WK1WxMXF8fbZ3d1FV1eX4Jn4V5IuLaPRyAsRCARgMpkwMTGBl5cX0V6SgSgUCqjVamKbz+dDc3MzTk9PI+Yn2R6pr68nxp+enqDVaiMKAUgIwncYnJycxOHhYcT9JAFhGAYKhYLYNjs7K4WlNCDJycmIjY19Fw8Gg8TLhkhIEpCEhARi/O7uDs/Pz1JY/uwxPpKKgvw2RUF+myQB8fv9eHx8fBcXc5H3mSQBCYVC6Ovrw+3t7Z+Y2+3G4OCgFHYAJD7Gf6eie+S3KQrymRYXF+HxeP7zWlhYkMpOus3O9195VlaWFHbRpfXrFAX5THt7e+9iYi7gPtM/01hPt2ZnYXYAAAAASUVORK5CYII="/>
          </a>
        </Box>
        <Box className="qtIcon" alignContent="center" border="all" round="small" pad="xsmall" >
          <a>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPDSURBVGiB7ZpPKGxtHMc/zMwdo5xCoTFjMwuUjTDULKbGn4XILGZhiY3SLJQmZWGksNCEDdJYWJqFfyEbhuRPyE4ySgnJn1CKmibzLm7jmndmcF/n3ve5877f3fz+Pp95nuecznNOglarDRIHSvy3ByCX4gZEGdOhVOJwOLBareh0Olmbnp+fMzU1hcvlIhAIyFJTkZKS0hXN0d7ejt1uR5IkWRq9lSRJlJaWolAo2NjYkKVmQqzNvr+/T2ZmJjabja2tLVmahWQymfB4PFxeXlJcXCxLzZggFxcXAGRnZ8vS6FfXj//NHlLonxNd/50Z+dV7RC7FzYwID2Kz2VCr1R/GCQ3S0tLC0NAQbrcbpfL9XSA0iNfr5fHxEYvFQldX17uxQoMcHh7S1NSE3++nsbERi8USM1Y4kJycnLDfm5ub9Pf3A9Db24tKpYqaJxRIa2srKysrGI3GMPvY2BjHx8fo9Xrq6+uj5goDkpCQQFpaGhqNhomJCTIyMl59gUCAgYEBABoaGqLmCwMSDAZxOp0sLi4iSRJOpzPMv7CwwM3NDXl5eRQUFETkCwMC32E6Ozt5enrCarViMBhefYFAgKWlJQDKy8sjcoUCAbi8vGR2dhaA2traMN/6+joARUVFEXnCgQDMz88DYDabw+xHR0cAYTMVkpAgPp8PAL1eH2a/uroCID09PSJHSJDb21sgcsDPz88AaDSaiBwhQdLS0gC4u7sLs4cAQkBvJSRIbm4uEPnMkpWVBfyYsbcSEqS6uhqAtbW1MHt+fj4AJycnETnCgWi1Wmw2G8Fg8PXqFVJlZSUAe3t7EXlCgSQmJtLT00NSUhJzc3Ovl1sAlUpFRUUFAMvLy5G5v22Un5DZbKaqqoqHhwf6+vrCfHV1dUiShM/n4+DgICL3w8OH3ymv10t/fz+7u7ucnZ292tVqNQ6HA4Dx8fGouUKBAAwODkbYmpub0el0nJ6e4vF4ouYJtbSiyWQy0dbWRjAYpKOjA7/fHzVOaJDU1FRGR0dRKpW43W5WV1djxgq3tN7q/v6ekZERCgsL6e7ufjdWaBCA4eFhvn37xsvLy7txQi+tkGLti7f6I0A+o/9fK4imuHmt8KWr1szMDCUlJVF9u7u7WK3Wr5T/KX1pab13Qq5QKL5S+qcVcyTX19dkZGRgNBrZ2dmJGlNTU/OPmpaVlQE/DhPkUEwQj8eD3W5nenpatmZ/1+TkpGy1Yn75sL29jUqlwmAwkJycLFtD+P7M7Xa7cblcH96xP6uYHwz8aYqb+0jcgPwF/agiU8AyOhAAAAAASUVORK5CYII="/>
          </a>
        </Box>
      </div>
    </div>
  )
}

export default QuickTools;
