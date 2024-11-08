import React from 'react';
import { Maxsulot } from '../../components/products/maxsulot';
import { ProductKategory, ProductMostColt } from '../../data/product';
import { DataCom } from '../../components/component_data/data_com';

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className='rowsdata'>
          {ProductKategory.map((item) =>
            <DataCom key={item.id} img={item.Image} title={item.title} />
          )}
        </div>
        <div className='rowsdata'>
          {ProductMostColt.map((item) =>
            <Maxsulot key={item.id} img={item.Image} title={item.title} text={item.Text} />)}
        </div>
      </div>
    </div>
  )
}

