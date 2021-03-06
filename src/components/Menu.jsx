import {factory} from 'nean';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Menu = factory({
    type: 'ul',
    className: 'menu',
});

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Divider = factory({
    type: 'li',
    className: 'divider',
    extend: ({children}) => ({
        'data-content': children,
    }),
    render: () => null
});

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Item = factory({
    type: 'li',
    className: 'menu-item',
});

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export const Badge = factory({
    type: 'div',
    className: 'menu-badge',
});

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.06.2019
 * Time: 15:16
 */
export default Menu;
