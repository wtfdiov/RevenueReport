import {GroupSpacing, RevenueValue} from '../ReportScreen.styles';
import Divider from '../Divider/Divider';
import Info from '../Info/Info';
import {Field} from '../Info/Info.styles';
import currencyFormat from '../../../utils/currencyFormat';
import {Revenue} from '../../../../types/Revenue';

interface ReportDisplay {
  revenue: Revenue;
}

export default function ReportDisplay({revenue}: ReportDisplay) {
  const {net, gross, spent, offer, validations} = revenue;
  const {validation, item, unitCost, limit, category} = offer;
  const validationsCount = validations.length - 1;
  return (
    <>
      <GroupSpacing>
        <Divider />
        <Field>Net revenue</Field>
        <RevenueValue>{currencyFormat(net)}</RevenueValue>
      </GroupSpacing>
      <GroupSpacing>
        <Divider />
        <Info title="Gross revenue" value={currencyFormat(gross)} />
        <Info title="Credits Spent" value={currencyFormat(spent)} />
      </GroupSpacing>
      <GroupSpacing>
        <Divider />
        <Info title="Validation" value={currencyFormat(validation)} />
        <Info title="Item" value={item} />
        <Info title="Unit cost" value={currencyFormat(unitCost)} />
        <Info title="Limit" value={`${limit} per customer`} />
        <Info title="Category" value={category} />
      </GroupSpacing>
      <GroupSpacing>
        <Divider />
        {/* <Info title="Impressions" value="1.204" />
        <Info title="Click" value="705" /> */}
        <Info title="Validations" value={validationsCount.toString()} />
        {/* <Info title="Offer rank by revenue" value="2" />
        <Info title="Offer rank by activity" value="1" /> */}
      </GroupSpacing>
    </>
  );
}
