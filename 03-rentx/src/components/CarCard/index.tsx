import { TouchableOpacityProps } from 'react-native';
import GasolineSvg from '../../assets/gasoline.svg'
import { CarDTO } from '../../global/dtos/CarDTO';
import { getAccessoryIcon } from '../../global/utils/getAccessoryIcon';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface Props extends TouchableOpacityProps {
  data: CarDTO;
}

export function CarCard({
  data: {
    brand,
    name,
    thumbnail,
    rent: {
      period,
      price,
    },
    fuel_type,
  },
  ...rest
}: Props) {
  const MotorIcon = getAccessoryIcon(fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{period}</Period>
            <Price>{price}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: thumbnail }}
        resizeMode="contain"
      />
    </Container>
  );
}
