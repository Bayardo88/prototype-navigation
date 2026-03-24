import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Waterfalls() {
  return (
    <div className="bg-white w-full min-h-screen p-8">
      <div className="max-w-2xl">
        {/* Two-column table layout */}
        <div className="border border-[#e2e8f0] rounded-lg overflow-hidden bg-white">
          {/* Currency */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Currency</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <Select defaultValue="USD">
                <SelectTrigger className="h-8 text-[13px] border-[#cbd5e1]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Company Name */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Company Name</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <Select>
                <SelectTrigger className="h-8 text-[13px] border-[#cbd5e1] text-[#037de8] data-[placeholder]:text-[#037de8]">
                  <SelectValue placeholder="SELECT OPTION" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="company1">Company 1</SelectItem>
                  <SelectItem value="company2">Company 2</SelectItem>
                  <SelectItem value="company3">Company 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Measurement Date */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Measurement Date</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <Select>
                <SelectTrigger className="h-8 text-[13px] border-[#cbd5e1] text-[#037de8] data-[placeholder]:text-[#037de8]">
                  <SelectValue placeholder="SELECT OPTION" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date1">December 31, 2025</SelectItem>
                  <SelectItem value="date2">September 30, 2025</SelectItem>
                  <SelectItem value="date3">June 30, 2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Cap Table */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Cap Table</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <Select>
                <SelectTrigger className="h-8 text-[13px] border-[#cbd5e1] text-[#037de8] data-[placeholder]:text-[#037de8]">
                  <SelectValue placeholder="SELECT OPTION" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cap1">Cap Table 1</SelectItem>
                  <SelectItem value="cap2">Cap Table 2</SelectItem>
                  <SelectItem value="cap3">Cap Table 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Exit Date */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Exit Date</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <Input
                type="text"
                defaultValue="03/22/2026"
                className="h-8 text-[13px] border-[#cbd5e1]"
              />
            </div>
          </div>

          {/* Exit Enterprise Value */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Exit Enterprise Value</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="text-[13px] text-[#0f172a]">$0</div>
            </div>
          </div>

          {/* Plus Cash */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Plus Cash</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="text-[13px] text-[#0f172a]">$0</div>
            </div>
          </div>

          {/* Less Debt */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Less Debt</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="text-[13px] text-[#0f172a]">$0</div>
            </div>
          </div>

          {/* Exit Equity Value */}
          <div className="grid grid-cols-[170px_1fr] border-b border-[#e2e8f0]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Exit Equity Value</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="text-[13px] text-[#0f172a]">$0</div>
            </div>
          </div>

          {/* Firm Total Exit Proceeds */}
          <div className="grid grid-cols-[170px_1fr]">
            <div className="px-4 py-3 bg-white border-r border-[#e2e8f0]">
              <Label className="text-[13px] font-normal text-[#0f172a]">Firm Total Exit Proceeds</Label>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="text-[13px] text-[#0f172a]">$0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}