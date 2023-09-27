'use client'
import React, { useState, useEffect } from "react";

interface OffCanvasCardProps {
  className: boolean;
  onClick: any;
  cartRef: any;
}
const OffCanvasCard: React.FC<OffCanvasCardProps> = ({className, onClick, cartRef}) => {
  return(
	<>
		{/* OffCanvas Cart Start */}
		<div id="offcanvas-cart" ref={cartRef} className={`offcanvas offcanvas-cart ${className && 'offcanvas-open'}`}>
			<div className="inner">
				<div className="head">
					<span className="title">Cart</span>
					<button onClick={onClick} className="offcanvas-close">×</button>
				</div>
				<div className="body customScroll">
					<ul className="minicart-product-list">
					<li>
						<a href="single-product.html" className="image">
						<img
							src="assets/images/product-image/1.jpg"
							alt="Cart product Image"
						/>
						</a>
						<div className="content">
						<a href="single-product.html" className="title">
							Walnut Cutting Board
						</a>
						<span className="quantity-price">
					1 x <span className="amount">$91.86</span>
					</span>
						<a href="#" className="remove">
							×
						</a>
						</div>
					</li>
					<li>
						<a href="single-product.html" className="image">
						<img
							src="assets/images/product-image/2.jpg"
							alt="Cart product Image"
						/>
						</a>
						<div className="content">
						<a href="single-product.html" className="title">
							Lucky Wooden Elephant
						</a>
						<span className="quantity-price">
					1 x <span className="amount">$453.28</span>
					</span>
						<a href="#" className="remove">
							×
						</a>
						</div>
					</li>
					<li>
						<a href="single-product.html" className="image">
						<img
							src="assets/images/product-image/3.jpg"
							alt="Cart product Image"
						/>
						</a>
						<div className="content">
						<a href="single-product.html" className="title">
							Fish Cut Out Set
						</a>
						<span className="quantity-price">
					1 x <span className="amount">$87.34</span>
					</span>
						<a href="#" className="remove">
							×
						</a>
						</div>
					</li>
					</ul>
				</div>
				<div className="foot">
					<div className="sub-total">
						<table className="table">
							<tbody>
								<tr>
									<td className="text-start">Sub-Total :</td>
									<td className="text-end">$523.30</td>
								</tr>
								<tr>
									<td className="text-start">Eco Tax (-2.00) :</td>
									<td className="text-end">$4.52</td>
								</tr>
								<tr>
									<td className="text-start">VAT (20%) :</td>
									<td className="text-end">$104.66</td>
								</tr>
								<tr>
									<td className="text-start">Total :</td>
									<td className="text-end theme-color">$632.48</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="buttons">
					<a
						href="cart.html"
						className="btn btn-dark btn-hover-primary mb-30px"
					>
						view cart
					</a>
					<a href="checkout.html" className="btn btn-outline-dark current-btn">
						checkout
					</a>
					</div>
					<p className="minicart-message">
					Free Shipping on All Orders Over $100!
					</p>
				</div>
			</div>
		</div>
		{/* OffCanvas Cart End */}
	</>
  )
}
export default OffCanvasCard;