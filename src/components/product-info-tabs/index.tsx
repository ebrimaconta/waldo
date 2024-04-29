import React, { useState } from 'react';
import Box from '../box';
import FlexBox from '../flex-box';
import Typography from '../typography';
import ProductDescription from '../product-description';
import { productDetailsType } from 'types/product';
import { Select } from './styles';

const Tabs = [
  {
    title: 'What you need to know',
    smallTitle: 'Info',
    value: 'info',
  },
  {
    title: 'Review (3)',
    value: 'review',
  },
  {
    title: 'FAQs',
    value: 'faq',
  },
  {
    title: 'Specifications',
    value: 'specifications',
  },
];
type Tab = typeof Tabs[number]['value'];
interface ProductInfoTabsProps {
  product: productDetailsType;
}
const ProductInfoTabs: React.FC<ProductInfoTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<Tab>('info');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <Box px={'1rem'}>
      <FlexBox display={{ xs: 'none', lg: 'flex' }} justifyContent='start' mb={3} borderBottom={'1px solid #C1CDD7'}>
        {Tabs?.map((tab) => (
          <TabButton
            key={tab?.value}
            active={activeTab === tab?.value}
            value={tab?.value}
            onClick={() => handleTabClick(tab?.value)}
          >
            {tab?.title}
          </TabButton>
        ))}
      </FlexBox>
      <Box display={{ xs: 'block', lg: 'none' }}>
        <Select
          // value={tab?.value}
          onChange={(e) => {
            handleTabClick(e.target.value as Tab);
          }}
        >
          {Tabs.map((tab) => (
            <option key={tab.value} value={tab.value}>
              {tab.title}
            </option>
          ))}
        </Select>
      </Box>

      {activeTab === 'info' && (
        <Box maxWidth={'531px'}>
          <ProductDescription html={product.description} />
        </Box>
      )}

      {activeTab === 'review' && (
        <Box py='10rem'>
          {/* Reviews for the 'review' tab */}
          <Typography>Reviews go here...</Typography>
        </Box>
      )}

      {activeTab === 'faq' && (
        <Box py='10rem'>
          {/* FAQs for the 'faq' tab */}
          <Typography>FAQs go here...</Typography>
        </Box>
      )}

      {activeTab === 'specifications' && (
        <Box py='10rem'>
          {/* Specifications for the 'specifications' tab */}
          <Typography>Specifications go here...</Typography>
        </Box>
      )}
    </Box>
  );
};

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  value: Tab;
}> = ({ active, onClick, children, value }) => (
  <Box
    px={'10px'}
    py={1}
    color={active ? 'primary.green' : '#7D879C'}
    fontWeight={500}
    onClick={onClick}
    borderBottom={active ? '2px solid #82C241' : '2px solid white'}
    cursor='pointer'
    transition='all 0.3s'
    fontSize={'1.02rem'}
  >
    {children}
  </Box>
);

export default ProductInfoTabs;
