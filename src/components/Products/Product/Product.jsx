import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                       "d0c3356403238dcdc3b9592d11f3ffcb097854d769bf631ff6743598e22c5044a858452bbe131378cb0f4bcc33c015d03da32e8e2a24a79bf23c5c6ea7e42e00d194b6c437006f5f3f4201c01fb9944db2df4a660720c686d77a04c8e588abcc332be1a2ceee7396251c4e284c2987182a5c6032f7ca0a6c205722090b2deb7c" +
                        data.img.data[0].attributes.url

                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;