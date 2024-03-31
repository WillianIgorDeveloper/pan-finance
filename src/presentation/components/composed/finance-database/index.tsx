import { CreateFinance } from "./create"
import { FilterFinance } from "./filter"
import { SearchFinance } from "./search"
import { FinanceDatabaseTable } from "./finance-database-table"

export function FinanceDatabase() {
  return (
    <div>
      <div className="flex gap-1">
        <SearchFinance />
        <FilterFinance />
        <CreateFinance />
      </div>
      <FinanceDatabaseTable />
    </div>
  )
}
