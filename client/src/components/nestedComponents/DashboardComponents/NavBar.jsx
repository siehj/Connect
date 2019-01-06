import React from 'react';
import { Box } from 'grommet';

const NavBar = (props) => {
  return (
    <Box id="navBar">
      <a > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEKSURBVEiJ7ZQ9joMwEEYHtBKcACpofQhwHw4C9+EQHAMhIQrgCvycwG6gdPGlWWdFsiSQhNWutE9yMdL4e7Ysj0FEoAMxjwzfJfA8j5qmoaZpyPf9XRI8WkEQQAgBjRACYRg+3Pe57jecTidM04Rr5nlGFEUgIhRFgTzP9wviOIZS6iZco5RCkiSXerPANE2kaboavMYmgWVZyLJsdzgA2LZ9X+A4Duq6fiocANq2heu63wsYYxiG4elwzTiOYIwtBZxzSClfDtdIKcE5/xL0ff+2cE3XdSAiGNpy+XV4bTQZhrGoD59FH1uark+l2XLb3zNN/wU/J6iqalGXZbm6eUvvzUd7N3//Dc4KcmT/GycJ1AAAAABJRU5ErkJggg=="/> </a>
      <a onClick={props.toggle} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABiSURBVEiJ7ZSxCgAxCENTP0/8/80ipX6HNxUKRxe5DgcGApLBR5Y0AIGLopvPC1CAAhwAIoLeO1QVzJzOd8XuMUYsmVk6X341IKJP7mMDEQl3jzlnMHM6X26oNS1AAf4PeAD0Cn4Nu93KtQAAAABJRU5ErkJggg=="/></a>
    </Box>
  )
}

export default NavBar;
