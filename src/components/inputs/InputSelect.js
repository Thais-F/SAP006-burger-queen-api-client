import './inputSelect.css'

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function InputSelect({onChange, value}) {
  return (
    
      <select value={value} onChange={onChange}>
          <option value ="" hidden >Mesa</option>
          {tables.map(table=>
             <option  key={table} value={table}>{table}</option>)}
        </select>
 
  );
}