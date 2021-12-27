import React from 'react';
import {ShopItem} from "./ShopItem";
import {Button, Card} from "react-bootstrap";
import "./ListItemComponent.scss";
import {Link} from "react-router-dom";
import {cartService} from "./CartService";
import {cartItemFromShopItem} from "./CartItem";
import {SingleItemComponent} from "./SingleItemComponent";
import {DataService, DataServiceInstance} from "./DataService";

/**
 * Входные параметры компоненты "элемент списка на главной странице"
 */
interface ListItemComponentProps {
    // Товар
    item: ShopItem;
}

/**
 * Элемент списка товаров на главной странице
 * @param props Входные параметры.
 */
export function ListItemComponent(props: ListItemComponentProps) {
    let item = props.item;

    // Функция для обработки нажатия на кнопку "добавить в корзину"
    function addToCart(item: ShopItem) {
        cartService.addCartItem(cartItemFromShopItem(item));
    }

    return (
        <Card className={"list-item"} style={{ width: '18rem', height: 500 }}>
            <Card.Img style={{height: 242}} variant="top" src={item.imageSrc} />
            <Card.Body>
                <Card.Title>
                    <Link to={"/item/" + item.id}>
                        {item.title}
                    </Link>
                </Card.Title>
                <Card.Text>
                    {item.brief}
                </Card.Text>

                <div className="add-to-cart" >
                    <Link to={"/item/" + item.id}>
                    <button  type="button" className="btn btn-info" >Learn more</button>
                    </Link>
                </div>
                    {/*<Button onClick={() => addToCart(item)} variant="success">Learn more</Button></div>*/}
            </Card.Body>
        </Card>
    );
}
