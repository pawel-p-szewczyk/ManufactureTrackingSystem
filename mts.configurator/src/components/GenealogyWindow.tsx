import * as React from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../store';
import { IGenealogyState, IProductionItem } from '../store/genealogy/types';

interface IGenealogyWindowProps {
    productionItems: IProductionItem[]
}

type AllProps = IGenealogyWindowProps & IGenealogyState;

const GenealogyWindow: React.SFC<AllProps> = ({productionItems}) => (
    <div>
        { productionItems.map(item => <div key={item.id}>{item.name}</div>) }
    </div>
);

const mapStateToProps = (state: IApplicationState) => state.genealogy;

export default connect(mapStateToProps)(GenealogyWindow);