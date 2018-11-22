import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store';
import { IGenealogyState, IProductionItem } from '../../store/genealogy/types';

interface IGenealogyViewProps {
    productionItems: IProductionItem[]
}

type AllProps = IGenealogyViewProps & IGenealogyState;

const GenealogyView: React.SFC<AllProps> = ({productionItems}) => (
    <div>
        { productionItems.map(item => <div key={item.id}>{item.name}</div>) }
    </div>
);

const mapStateToProps = (state: IApplicationState) => state.genealogy;

export default connect(mapStateToProps)(GenealogyView);