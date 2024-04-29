import styled from "styled-components";

export const Select = styled.select<any>`
  padding: 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;

  /* Hide the default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Create custom arrow */
  background-image: linear-gradient(45deg, transparent 50%, #000 50%),
    linear-gradient(135deg, #000 50%, transparent 50%);
  background-position: calc(100% - 24px) calc(1em + 3px),
    calc(100% - 19px) calc(1em + 3px);
  background-size: 5px 5px;
  background-repeat: no-repeat;

  /* Remove border color change on focus */
  &:focus {
    outline: none;
  }
`;
