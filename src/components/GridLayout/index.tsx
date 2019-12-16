import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from 'react-data-grid';
import { IRootState } from '../../store';


interface IGridLayout {
  years: any;
}

const GridLayout: FunctionComponent<IGridLayout> = props => {
  let { data } = props.years;
  data = data.map(simplify);
  console.log(data);
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'author', name: 'Author' },
    { key: 'YearId', name: 'Year'},
    { key: 'language', name: 'language'},
    { key: 'actions', name: 'Actions'},
  ];

  const rows = [
    { id: 0, title: 'row1', count: 20 },
    { id: 1, title: 'row1', count: 40 },
    { id: 2, title: 'row1', count: 60 }
  ];

  return (
    <>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => data[i]}
        rowsCount={3}
        minHeight={150}
      />
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  years: state.years
});

const simplify = (data : any) => ({
  ...data,
  ...data.Language,
  ...data.Contemplations[0],
  actions: <div>abc</div>
})

export default connect(
  mapStateToProps,
  {}
)(GridLayout);