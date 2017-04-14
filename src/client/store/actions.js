export const toggleMenu = ({ dispatch }) => dispatch('TOGGLE_MENU')

export const toggleCategory = ({dispatch}, id) => {
  dispatch('TOGGLE_CATEGORY', id)
}
