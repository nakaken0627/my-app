"use client";
import { useState } from "react";
import { Card, Move, searchLocation } from "./searchLocation";

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "PassionFruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }: { product: Product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

type ProductTableProps = {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
};

function ProductTable({
  products,
  filterText,
  inStockOnly,
}: ProductTableProps) {
  const rows: React.JSX.Element[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
      lastCategory = product.category;
    }
    rows.push(<ProductRow product={product} key={product.name} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type SearchbarProps = {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>;
};

function Searchbar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}: SearchbarProps) {
  return (
    <>
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => {
            setFilterText(e.target.value);
          }}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => {
                setInStockOnly(e.target.checked);
              }}
            />
            Only show products in stock
          </label>
        </div>
      </form>
    </>
  );
}

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  return (
    <>
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export const truncateWithEllipsis = (str: string, max: number) => {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
};

export const getQueryParam = (str: string, k: string) => {
  return new URL(str).searchParams.get(k);
};

const cards: Card[] = [
  [6, 0, 0],
  [7, 1, 0],
  [5, 2, 0],
  [2, 3, 0],
  [1, 1, 1],
  [3, 0, 2],
  [4, 0, 1],
];
const moves: Move[] = [
  [6, 0, 0, 1, 1],
  [4, 0, 1, 2, 0],
];
const query = 6;

console.log(searchLocation(cards, moves, query));

export const changeFormat = (str: Date) => {
  return str.toLocaleDateString();
};
