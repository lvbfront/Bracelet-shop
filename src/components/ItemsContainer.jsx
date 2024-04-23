import FootItem from "./footItem";

import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from './assets/menu';
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <FootItem Links={PRODUCTS} title="PRODUCTS" />
      <FootItem Links={RESOURCES} title="RESOURCES" />
      <FootItem Links={COMPANY} title="COMPANY" />
      <FootItem Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;