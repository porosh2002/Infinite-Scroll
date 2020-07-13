import React,{Component} from 'react';
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
    constructor() {
      super();
      this.state = {
        hovered: false,
        hovered_womwn: false,
        hovered_kid: false,
        hovered_home: false,
        hovered_essential: false,
      };
    }
    menu_div_out = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    men_mouseEnter = () => {
      this.setState({
        hovered: true,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    women_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: true,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    kid_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: true,
        hovered_essential: false,
      });
    };
    home_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: true,
        hovered_kid: false,
        hovered_essential: false,
      });
    };
    essential_mouseEnter = () => {
      this.setState({
        hovered: false,
        hovered_womwn: false,
        hovered_home: false,
        hovered_kid: false,
        hovered_essential: true,
      });
    };
    render() {
      const { hovered } = this.state;
      const { hovered_womwn } = this.state;
      const { hovered_kid } = this.state;
      const { hovered_home } = this.state;
      const { hovered_essential } = this.state;
      const style = hovered ? { display: "block" } : {};
      const style2 = hovered_womwn ? { display: "block" } : {};
      const style3 = hovered_kid ? { display: "block" } : {};
      const style4 = hovered_home ? { display: "block" } : {};
      const style5 = hovered_essential ? { display: "block" } : {};
      return (
        <div>
          <div className="navigation">
            <div className="logo_div" onMouseEnter={this.menu_div_out}>
              <Link to="/">
                <img className="App-logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="menu-div-main">
              <div
                className="menu-div-one"
                onMouseEnter={this.menu_div_out}
              ></div>
              <div className="menu-div">
                {/* men_link class removed */}
                <Link
                  className="menu-link "
                  to=""
                  onMouseEnter={this.men_mouseEnter}
                >
                  Men
                </Link>
                <Link
                  className="menu-link"
                  to=""
                  onMouseEnter={this.women_mouseEnter}
                >
                  Women
                </Link>
                <Link
                  className="menu-link"
                  to=""
                  onMouseEnter={this.kid_mouseEnter}
                >
                  Kids
                </Link>
                <Link
                  className="menu-link"
                  to=""
                  onMouseEnter={this.home_mouseEnter}
                >
                  Home & Living
                </Link>
                <Link
                  className="menu-link"
                  to=""
                  onMouseEnter={this.essential_mouseEnter}
                >
                  Essentials
                </Link>
                <Link
                  className="menu-link"
                  to=""
                  onMouseEnter={this.menu_div_out}
                >
                  Buy Old Goods
                </Link>
              </div>
            </div>
            <div className="srch-profile" onMouseEnter={this.menu_div_out}>
              <div className="search-section">
                <form>
                  <label className="label">
                    <input
                      className="search-box"
                      type="search"
                      placeholder="Search Product"
                    />
                    <input className="search-btn" type="submit" value="Find" />
                  </label>
                </form>
              </div>
              <div className="pr-container">
                <Link to="/">
                  <div className="pre-container-link-div">
                    <i className="fas fa-user-circle"></i>
                    <p className="pr-container-des">Profile</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                    <i className="far fa-bookmark"></i>
                    <p className="pr-container-des">Wishlist</p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="pre-container-link-div">
                    <i className="fas fa-shopping-bag"></i>
                    <p className="pr-container-des">Cart</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Topwear
                </Link>
                <Link className="drop-des" to="">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="">
                  Casual Shirts
                </Link>
                <Link className="drop-des" to="">
                  Formal Shirts
                </Link>
                <Link className="drop-des" to="">
                  SweatShirts
                </Link>
                <Link className="drop-des" to="">
                  Jackets
                </Link>
                <Link className="drop-des" to="">
                  Blazers & Coats
                </Link>
                <Link className="drop-des" to="">
                  Sweaters
                </Link>
                <Link className="drop-des" to="">
                  Suits
                </Link>
                <Link className="drop-des" to="">
                  Rain Jackets
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Footwear
                </Link>
                <Link className="drop-des" to="">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="">
                  Formal Shoes
                </Link>
                <Link className="drop-des" to="">
                  Sneakers
                </Link>
                <Link className="drop-des" to="">
                  Sandals & Floaters
                </Link>
                <Link className="drop-des" to="">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="">
                  Socks
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="">
                  Jeans
                </Link>
                <Link className="drop-des" to="">
                  Casual Trousers
                </Link>
                <Link className="drop-des" to="">
                  Formal Trousers
                </Link>
                <Link className="drop-des" to="">
                  Shorts
                </Link>
                <Link className="drop-des" to="">
                  Track Pants & Joggers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Gadgets
                </Link>
                <Link className="drop-des" to="">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="">
                  Headphones
                </Link>
                <Link className="drop-des" to="">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="">
                  Sports Sandals
                </Link>
                <Link className="drop-des" to="">
                  Active T-Shirts
                </Link>
                <Link className="drop-des" to="">
                  Track Pants & Shorts
                </Link>
                <Link className="drop-des" to="">
                  Tracksuits
                </Link>
                <Link className="drop-des" to="">
                  Jackets & Sweatshirts
                </Link>
                <Link className="drop-des" to="">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="">
                  Swimwear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Festive Wear
                </Link>
                <Link className="drop-des" to="">
                  Kurtas & Kurta Sets
                </Link>
                <Link className="drop-des" to="">
                  Sherwanis
                </Link>
                <Link className="drop-des" to="">
                  Nehru Jackets
                </Link>
                <Link className="drop-des" to="">
                  Dhotis
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Sleepwear
                </Link>
                <Link className="drop-des" to="">
                  Briefs & Trunks
                </Link>
                <Link className="drop-des" to="">
                  Boxers
                </Link>
                <Link className="drop-des" to="">
                  Vests
                </Link>
                <Link className="drop-des" to="">
                  SleepWear & Loungewear
                </Link>
                <Link className="drop-des" to="">
                  Thermals
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Fashion Accessories
                </Link>
                <Link className="drop-des" to="">
                  Wallets
                </Link>
                <Link className="drop-des" to="">
                  Belts
                </Link>
                <Link className="drop-des" to="">
                  Perfumes & Body Mists
                </Link>
                <Link className="drop-des" to="">
                  Trimmers
                </Link>
                <Link className="drop-des" to="">
                  Deodorants
                </Link>
                <Link className="drop-des" to="">
                  ties Cufflinks & Pocket Squares
                </Link>
                <Link className="drop-des" to="">
                  Accessory Gift Sets
                </Link>
                <Link className="drop-des" to="">
                  Caps & Hats
                </Link>
                <Link className="drop-des" to="">
                  Mufflers Scarves & Gloves
                </Link>
                <Link className="drop-des" to="">
                  Phone Case
                </Link>
                <Link className="drop-des" to="">
                  Rings & Wristwear
                </Link>
                <Link className="drop-des" to="">
                  Helmets
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Personal Care & Grooming
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Watches
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Bags & Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Luggages & Trolleys
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style2}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Western Wear
                </Link>
                <Link className="drop-des" to="">
                  Dresses & Jumpsults
                </Link>
                <Link className="drop-des" to="">
                  Tops,T-Shirts & Shirts
                </Link>
                <Link className="drop-des" to="">
                  Jeans & Jeggings
                </Link>
                <Link className="drop-des" to="">
                  Trousers & Capris
                </Link>
                <Link className="drop-des" to="">
                  Shorts & Skirts
                </Link>
                <Link className="drop-des" to="">
                  Shrugs
                </Link>
                <Link className="drop-des" to="">
                  Sweaters & Sweatshirts
                </Link>
                <Link className="drop-des" to="">
                  Jackets & Coats
                </Link>
                <Link className="drop-des" to="">
                  Blazers & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Footwear
                </Link>
                <Link className="drop-des" to="">
                  Flats
                </Link>
                <Link className="drop-des" to="">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="">
                  Heels
                </Link>
                <Link className="drop-des" to="">
                  Boots
                </Link>
                <Link className="drop-des" to="">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="">
                  Floaters
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Sports Wear
                </Link>
                <Link className="drop-des" to="">
                  Clothing
                </Link>
                <Link className="drop-des" to="">
                  Footwear
                </Link>
                <Link className="drop-des" to="">
                  Sports Accessories
                </Link>
                <Link className="drop-des" to="">
                  Shorts Equipmwnt
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Gadgets
                </Link>
                <Link className="drop-des" to="">
                  Smart Wearables
                </Link>
                <Link className="drop-des" to="">
                  Fitness Gadgets
                </Link>
                <Link className="drop-des" to="">
                  Headphones
                </Link>
                <Link className="drop-des" to="">
                  Speakers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Beauty
                </Link>
                <Link className="drop-des" to="">
                  Makeup
                </Link>
                <Link className="drop-des" to="">
                  Skincare
                </Link>
                <Link className="drop-des" to="">
                  Premium Beauty
                </Link>
                <Link className="drop-des" to="">
                  Lipsticks
                </Link>
                <Link className="drop-des" to="">
                  Fragrances
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Jewellery
                </Link>
                <Link className="drop-des" to="">
                  Fashion Jewellery
                </Link>
                <Link className="drop-des" to="">
                  Fine Jewellery
                </Link>
                <Link className="drop-des" to="">
                  Earrings
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Indian & Fusion Wear
                </Link>
                <Link className="drop-des" to="">
                  Kurtas
                </Link>
                <Link className="drop-des" to="">
                  Kurtas , Tunics & Tops
                </Link>
                <Link className="drop-des" to="">
                  Ethnic Dresses
                </Link>
                <Link className="drop-des" to="">
                  Leggings , Sakwars & Churidars
                </Link>
                <Link className="drop-des" to="">
                  Skirts & Palazzos
                </Link>
                <Link className="drop-des" to="">
                  Sarrees & Blouses
                </Link>
                <Link className="drop-des" to="">
                  Dress Materials
                </Link>
                <Link className="drop-des" to="">
                  Lehenga Cholis
                </Link>
                <Link className="drop-des" to="">
                  Dupattas & Shawls
                </Link>
                <Link className="drop-des" to="">
                  Jackets & Waistcoats
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Lingerie & Sleepwear
                </Link>
                <Link className="drop-des" to="">
                  Bras & Lingerie Sets
                </Link>
                <Link className="drop-des" to="">
                  Briefs
                </Link>
                <Link className="drop-des" to="">
                  Shapewear
                </Link>
                <Link className="drop-des" to="">
                  Sleepwear & Loungewear
                </Link>
                <Link className="drop-des" to="">
                  Swimwear
                </Link>
                <Link className="drop-des" to="">
                  Camisoles & thermals
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="">
                  Belts,Scarves & More
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Watches & Wearable
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Sunglasses & Frames
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Plus Size
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Backpacks
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Luggages & Trolleys
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Handbags,Bags & Wallets
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style3}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Infants
                </Link>
                <Link className="drop-des" to="">
                  Rompers & Onesies
                </Link>
                <Link className="drop-des" to="">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="">
                  Tshirt & Tops
                </Link>
                <Link className="drop-des" to="">
                  Dresses
                </Link>
                <Link className="drop-des" to="">
                  Bottomwear
                </Link>
                <Link className="drop-des" to="">
                  Winter Wear
                </Link>
                <Link className="drop-des" to="">
                  Innerwear & SleepWear
                </Link>
                <Link className="drop-des" to="">
                  Infants Accessories
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Boys Footwear
                </Link>
                <Link className="drop-des" to="">
                  Sports Shoes
                </Link>
                <Link className="drop-des" to="">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="">
                  Sandals
                </Link>
                <Link className="drop-des" to="">
                  School Shoes
                </Link>
                <Link className="drop-des" to="">
                  Flip Flops
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Girls Footwear
                </Link>
                <Link className="drop-des" to="">
                  Flats
                </Link>
                <Link className="drop-des" to="">
                  Casual Shoes
                </Link>
                <Link className="drop-des" to="">
                  Heels
                </Link>
                <Link className="drop-des" to="">
                  Flip Flops
                </Link>
                <Link className="drop-des" to="">
                  Sandals
                </Link>
                <Link className="drop-des" to="">
                  School Shoes
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Kids Accessories
                </Link>
                <Link className="drop-des" to="">
                  Bags & Backpacks
                </Link>
                <Link className="drop-des" to="">
                  Watches
                </Link>
                <Link className="drop-des" to="">
                  Jewellery
                </Link>
                <Link className="drop-des" to="">
                  Eyewear
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Home & Bath
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Girls Clothing
                </Link>
                <Link className="drop-des" to="">
                  Dresses
                </Link>
                <Link className="drop-des" to="">
                  Tops
                </Link>
                <Link className="drop-des" to="">
                  Tshirts
                </Link>
                <Link className="drop-des" to="">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="">
                  Dungarees & Jumpsuits
                </Link>
                <Link className="drop-des" to="">
                  Skirts & Shorts
                </Link>
                <Link className="drop-des" to="">
                  Tight & Leggings
                </Link>
                <Link className="drop-des" to="">
                  Jeans , Trousers & Capris
                </Link>
                <Link className="drop-des" to="">
                  Jacket , Sweater ,Sweatshirts
                </Link>
                <Link className="drop-des" to="">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Boys Clothing
                </Link>
                <Link className="drop-des" to="">
                  T-Shirt
                </Link>
                <Link className="drop-des" to="">
                  Shirts
                </Link>
                <Link className="drop-des" to="">
                  Shorts
                </Link>
                <Link className="drop-des" to="">
                  Jeans
                </Link>
                <Link className="drop-des" to="">
                  Trousers
                </Link>
                <Link className="drop-des" to="">
                  Clothing Sets
                </Link>
                <Link className="drop-des" to="">
                  Ethnic Wear
                </Link>
                <Link className="drop-des" to="">
                  Track Pants & Pyjamas
                </Link>
                <Link className="drop-des" to="">
                  Jackets , Sweater, Sweatshirts
                </Link>
                <Link className="drop-des" to="">
                  Innerwear & Sleepwear
                </Link>
              </div>
  
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Brands
                </Link>
                <Link className="drop-des" to="">
                  H&M
                </Link>
                <Link className="drop-des" to="">
                  United Colors of Benetton
                </Link>
                <Link className="drop-des" to="">
                  YK
                </Link>
                <Link className="drop-des" to="">
                  U.S. Polo Assn. Kids
                </Link>
                <Link className="drop-des" to="">
                  GAP Kids
                </Link>
                <Link className="drop-des" to="">
                  Gini & Jony
                </Link>
                <Link className="drop-des" to="">
                  Peppermint
                </Link>
                <Link className="drop-des" to="">
                  next
                </Link>
                <Link className="drop-des" to="">
                  Allen Solly Junior
                </Link>
                <Link className="drop-des" to="">
                  Nike
                </Link>
                <Link className="drop-des" to="">
                  Pepe Jeans
                </Link>
              </div>
            </div>
          </div>
  
          <div
            style={style4}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddmf">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Brands
                </Link>
                <Link className="drop-des" to="">
                  Bombay Dyeing
                </Link>
                <Link className="drop-des" to="">
                  Spaces
                </Link>
                <Link className="drop-des" to="">
                  D Decor
                </Link>
                <Link className="drop-des" to="">
                  Portico New Work
                </Link>
                <Link className="drop-des" to="">
                  Pure Home & Living
                </Link>
                <Link className="drop-des" to="">
                  Swayam
                </Link>
                <Link className="drop-des" to="">
                  Raymond home
                </Link>
                <Link className="drop-des" to="">
                  Maspar
                </Link>
                <Link className="drop-des" to="">
                  Corelle
                </Link>
                <Link className="drop-des" to="">
                  Trident
                </Link>
                <Link className="drop-des" to="">
                  Cortina
                </Link>
                <Link className="drop-des" to="">
                  Story@Home
                </Link>
                <Link className="drop-des" to="">
                  Random
                </Link>
                <Link className="drop-des" to="">
                  Home Sparkle
                </Link>
                <Link className="drop-des" to="">
                  ROMEE
                </Link>
                <Link className="drop-des" to="">
                  SEJ
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Bath
                </Link>
                <Link className="drop-des" to="">
                  Bath Towels
                </Link>
                <Link className="drop-des" to="">
                  Hand & Face Towels
                </Link>
                <Link className="drop-des" to="">
                  Beach Towels
                </Link>
                <Link className="drop-des" to="">
                  Towels Set
                </Link>
                <Link className="drop-des" to="">
                  Bath Rugs
                </Link>
                <Link className="drop-des" to="">
                  Bath Robes
                </Link>
                <Link className="drop-des" to="">
                  Bathroom Accessories
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Home Decor
                </Link>
                <Link className="drop-des" to="">
                  Plants & Planters
                </Link>
                <Link className="drop-des" to="">
                  Aromas & Candles
                </Link>
                <Link className="drop-des" to="">
                  Clocks
                </Link>
                <Link className="drop-des" to="">
                  Mirrors
                </Link>
                <Link className="drop-des" to="">
                  Wall Decor
                </Link>
                <Link className="drop-des" to="">
                  Wall Shelves
                </Link>
                <Link className="drop-des" to="">
                  Fountains
                </Link>
                <Link className="drop-des" to="">
                  ShowPieces & Vases
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Kitchen & Table
                </Link>
                <Link className="drop-des" to="">
                  Serveware
                </Link>
                <Link className="drop-des" to="">
                  Bar & Drinkware
                </Link>
                <Link className="drop-des" to="">
                  Cookware
                </Link>
                <Link className="drop-des" to="">
                  Kitchen Storage
                </Link>
                <Link className="drop-des" to="">
                  Table Cover
                </Link>
                <Link className="drop-des" to="">
                  Furnishings
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Storage
                </Link>
                <Link className="drop-des" to="">
                  Organisers
                </Link>
                <Link className="drop-des" to="">
                  Hooks & Holders
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Lamps & Lighting
                </Link>
                <Link className="drop-des" to="">
                  Floor Lamps
                </Link>
                <Link className="drop-des" to="">
                  Table Lamps
                </Link>
                <Link className="drop-des" to="">
                  Wall Laps
                </Link>
              </div>
            </div>
            <div className="ddms">
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Flooring
                </Link>
                <Link className="drop-des" to="">
                  Carpets
                </Link>
                <Link className="drop-des" to="">
                  Mats & Dhurries
                </Link>
                <Link className="drop-des" to="">
                  Door Mats
                </Link>
              </div>
  
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="">
                  Bed Liner & Furnishing
                </Link>
                <Link className="drop-des" to="">
                  Bedsheets
                </Link>
                <Link className="drop-des" to="">
                  Bedding Sets
                </Link>
                <Link className="drop-des" to="">
                  Blamkets,Quilts & Dohars
                </Link>
                <Link className="drop-des" to="">
                  Pillows & Pillow Covers
                </Link>
                <Link className="drop-des" to="">
                  Bed Covers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Cushions & Cushion Covers
                </Link>
              </div>
              <div className="drop-div">
                <Link className="drop-title" to="">
                  Curtains
                </Link>
              </div>
            </div>
          </div>
          <div
            style={style5}
            className="drop-down"
            onMouseLeave={this.menu_div_out}
          >
            <div className="ddms">
              <div className="drop-div ">
                <Link className="drop-title drp-lst" to="">
                  Mask
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Skin Care
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Haircare
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Bath & Body
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Men's Grooming
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Baby Care
                </Link>
                <Link className="drop-title drp-lst" to="">
                  At Home Salon
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Hair Styling
                </Link>
                <Link className="drop-title drp-lst" to="">
                  Appliances
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  