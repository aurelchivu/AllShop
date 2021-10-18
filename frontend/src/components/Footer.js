import React from 'react';

const Footer = () => {
  let year = new Date();
  return (
    <div class='text-center py-5'>
      Copyright &copy; AllShop {year.getFullYear()}. All rights reserved.
    </div>
  );
};

export default Footer;
