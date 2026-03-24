import { useState } from "react";
import { Plus, ChevronDown, ChevronRight, ChevronUp, Minus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface CompanyItem {
  company: string;
  symbol: string;
  capitalIqId: string;
}

interface CompGroup {
  id: string;
  name: string;
  displayName: string;
  version: string;
  companies: CompanyItem[];
}

const MOCK_COMP_GROUPS: CompGroup[] = [
  {
    id: "1",
    name: "Public Companies for Test",
    displayName: "Public Companies for Test | Public Comp Group",
    version: "05/25/2023 | v.1",
    companies: [
      { company: "Ford Motor Company", symbol: "NYSE:F", capitalIqId: "IQT2613214" },
      { company: "Tesla, Inc.", symbol: "Nasdaq:GS:TSLA", capitalIqId: "IQT108803915" },
      { company: "The Boeing Company", symbol: "NYSE:BA", capitalIqId: "IQT2594884" },
      { company: "General Motors Company", symbol: "NYSE:GM", capitalIqId: "IQT1066740665" },
    ],
  },
  {
    id: "2",
    name: "Tech Companies",
    displayName: "Tech Companies | Public Comp Group",
    version: "06/15/2023 | v.2",
    companies: [
      { company: "Apple Inc.", symbol: "NASDAQ:AAPL", capitalIqId: "IQT100567890" },
      { company: "Microsoft Corporation", symbol: "NASDAQ:MSFT", capitalIqId: "IQT200567891" },
      { company: "Alphabet Inc.", symbol: "NASDAQ:GOOGL", capitalIqId: "IQT300567892" },
    ],
  },
];

export function CompsGroup() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-white w-full min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#0f172a] mb-6">Comps Group</h1>

        {/* Comp Groups List */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden mb-6">
          {MOCK_COMP_GROUPS.map((group, index) => {
            const isExpanded = expandedItems.has(group.id);
            const isLast = index === MOCK_COMP_GROUPS.length - 1;

            return (
              <div
                key={group.id}
                className={`${!isLast ? "border-b border-[#e2e8f0]" : ""}`}
              >
                {/* Group Header Row */}
                <button
                  onClick={() => toggleItem(group.id)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#f8fafc] transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronUp className="size-5 text-[#64748b] shrink-0" />
                    ) : (
                      <ChevronDown className="size-5 text-[#64748b] shrink-0" />
                    )}
                    <span className="text-[14px] font-medium text-[#0f172a]">
                      {group.displayName}
                    </span>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 bg-white">
                    {/* Name and Previous Versions Fields */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor={`name-${group.id}`} className="text-[13px] font-medium text-[#0f172a]">
                          Name
                        </Label>
                        <Input
                          id={`name-${group.id}`}
                          value={group.name}
                          readOnly
                          className="text-[13px] text-[#037de8] bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`version-${group.id}`} className="text-[13px] font-medium text-[#0f172a]">
                          Previous Versions
                        </Label>
                        <Select defaultValue={group.version}>
                          <SelectTrigger id={`version-${group.id}`} className="text-[13px] bg-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={group.version}>{group.version}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Companies Table */}
                    <div className="border border-[#e2e8f0] rounded-md overflow-hidden mb-4">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-white hover:bg-white">
                            <TableHead className="text-[13px] font-semibold text-[#0f172a] border-r border-[#e2e8f0]">
                              Company
                            </TableHead>
                            <TableHead className="text-[13px] font-semibold text-[#0f172a] border-r border-[#e2e8f0]">
                              Symbol
                            </TableHead>
                            <TableHead className="text-[13px] font-semibold text-[#0f172a]">
                              Capital IQ ID
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {group.companies.map((company, idx) => (
                            <TableRow key={idx} className="hover:bg-[#f8fafc]">
                              <TableCell className="text-[13px] text-[#0f172a] border-r border-[#e2e8f0]">
                                {company.company}
                              </TableCell>
                              <TableCell className="text-[13px] text-[#0f172a] border-r border-[#e2e8f0]">
                                {company.symbol}
                              </TableCell>
                              <TableCell className="text-[13px] text-[#0f172a]">
                                {company.capitalIqId}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button className="bg-[#037de8] hover:bg-[#0369d1] text-white text-[13px]">
                        <Plus className="size-4" />
                        Add Comparable Company
                      </Button>
                      <Button variant="outline" className="border-[#dc2626] text-[#dc2626] hover:bg-[#fee2e2] hover:text-[#dc2626] text-[13px]">
                        <Minus className="size-4" />
                        Delete Group
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Add Comp Group Button */}
        <Button className="bg-[#037de8] hover:bg-[#0369d1] text-white">
          <Plus className="size-4" />
          Add Comp Group
        </Button>
      </div>
    </div>
  );
}