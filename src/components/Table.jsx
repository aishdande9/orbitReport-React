import './styling.css';
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
       </tr>
     </thead>
     <tbody> 
      {sat.map(
        (data,id) => (<tr key={id}>
          <th><td>{data.name}</td></th>
          <th><td>{data.type}</td></th>
          <th><td>{data.launchDate}</td></th>
          <th><td>{data.operational ? 'Active' : 'Inactive'}</td></th>
        
        </tr>)
      )}
     
     </tbody>
   </table>
  );
};

export default Table;