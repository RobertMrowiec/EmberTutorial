import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
]
export function rentalPropertyType([params]) {
  return communityPropertyTypes.includes(params) ? 'Community' : 'Standalone'
}

export default helper(rentalPropertyType);
