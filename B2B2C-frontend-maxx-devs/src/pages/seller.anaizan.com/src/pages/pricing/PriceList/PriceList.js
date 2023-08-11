import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import computer from "../../../assets/img/desk.png"
import Plans from "../Plans/Plans";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

import PriceListStyle from "./PriceList.module.css"

const PriceList = () => {
  return (
    <>
      <div className={PriceListStyle.price_style}>
        <SectionHeading
          heading="Reach millions of"
          span="B2B buyers"
          afterSpan="globally"
          sub="Choose an Anaizan.com seller plan to launch your new business growth"
        />
        <Plans />
        <p className={PriceListStyle.terms}>
          By upgrading, I agree to Anaiza.com’s Gold Supplier Terms &
          Conditions. Link Fee is collected via 2 separate payments. One to
          Anaiza.com and another to a certified service partner.
        </p>
        <div className={PriceListStyle.colored_section}>
          <p className={PriceListStyle.blue_text}>Frais</p>
          <h3>Développez votre entreprise de manière rentable</h3>
          <p className={PriceListStyle.text}>
            Le coût de vendre sur Anaizan dépend de votre plan de vente, de la
            catégorie de votre produit, de votre stratégie d'expédition et
            d'autres variables. Les options sont flexibles, de sorte que vous
            pouvez trouver la combinaison qui fonctionne le mieux pour vous et
            vos objectifs.
          </p>
          <p className={PriceListStyle.link}>
            Découvrez Expédié par Anazain <IoMdArrowForward className={PriceListStyle.icon} />
          </p>
        </div>

        <div className={PriceListStyle.more_info}>
          <div className={PriceListStyle.text_side}>
            <h3>Commencez à vendre dès aujourd'hui</h3>
            <p className={PriceListStyle.more}>
              Vendre sur Anaizan vous permet de toucher des dizaines de millions
              d'acheteurs, que vous vendiez un seul article ou des millions. La
              configuration de votre compte est définie pour vendre dans toute
              l'Europe.
            </p>
            <button> S'inscrire </button>
            <p className={PriceListStyle.off}>39 € (hors TVA) par mois + frais de vente</p>
          </div>
            <img src={computer} alt="computer"/>
        </div>
      </div>
    </>
  );
}

export default PriceList
