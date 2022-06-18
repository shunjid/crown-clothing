import styled from 'styled-components'

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

export const CheckoutItemField = styled.span`
  width: 23%;
`

export const CheckoutItemQuantityField = styled(CheckoutItemField)`
  display: flex;
`

export const CheckoutItemQuantityFieldArrow = styled.div`
  cursor: pointer;
`

export const CheckoutItemQuantityFieldValue = styled.div`
  margin: 0 10px;
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
