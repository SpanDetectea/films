import "./Promo.scss";
import promo from "../../../assets/videos/promo.mp4";
import { NavLink } from "react-router-dom";
import Button from "antd/es/button";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

function Promo() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <Typography.Title className="promo__wrapper__name">
          Форсаж
        </Typography.Title>
        <Paragraph className="promo__wrapper__description">
          Коп под прикрытием внедряется в банду стритрейсеров и становится одним
          из них. Первая часть гоночной франшизы
        </Paragraph>
        <NavLink to={"/film/" + 666}>
          <Button type="primary" size="large" className="promo__wrapper__more">
            Подробнее
            <ArrowRightOutlined />
          </Button>
        </NavLink>
      </div>
      <div>
        <video autoPlay muted loop playsInline src={promo} width="100%"></video>
      </div>
    </div>
  );
}

export default Promo;
