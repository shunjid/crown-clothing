import styled from 'styled-components'
import { InvertedButton } from '../button/button.styles'

export const ProductCardFooterName = styled.div`
  width: 90%;
  margin-bottom: 15px;
`

export const ProductCardFooterPrice = styled.div`
  width: 10%;
`

export const ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`
