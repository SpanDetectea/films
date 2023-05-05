
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { Menu, MenuProps } from 'antd';
import { UnorderedListOutlined} from '@ant-design/icons'

const items: MenuProps['items'] = [
    {
        label: '',
        key: 'SubMenu',
        icon: <UnorderedListOutlined className='navigation__icon' style={{fontSize: '20px'}}/>,
        popupClassName:'navigation__subMenu',
        popupOffset:[-100,0],
        children: [
          {
            type: 'group',
            label: '',
            className: 'navigation__subMenu__item',
            children: [
              {
                label: <Link to='/'>Главная</Link>,
                key: 'setting:1',
                className:'navigation__subMenu__item__text'
              },
              {
                label: <Link to='/movie'>Кино</Link>,
                key: 'setting:2',
                className:'navigation__subMenu__item__text'
              },
              {
                label: <Link to='/series'>Сериалы</Link>,
                key: 'setting:3',
                className:'navigation__subMenu__item__text'
              },
              {
                label: <Link to='/cartoons'>Мультфильмы</Link>,
                key: 'setting:4',
                className:'navigation__subMenu__item__text'
              },
            ],
          },
        ],
      },

];

function Navigation() {
    const [current, setCurrent] = useState('');
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
      };
    
      return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} triggerSubMenuAction="click" className='navigation__menu2'/>;
}

export default Navigation;