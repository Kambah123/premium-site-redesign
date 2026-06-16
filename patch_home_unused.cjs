const fs = require('fs');
const file = 'src/pages/Home.tsx';
let code = fs.readFileSync(file, 'utf-8');

code = code.replace(/import MarqueeStrip from '\.\.\/sections\/MarqueeStrip';\n/, '');
code = code.replace(/import StatsGrid from '\.\.\/sections\/StatsGrid';\n/, '');
code = code.replace(/import KnowledgeBaseCTA from '\.\.\/sections\/KnowledgeBaseCTA';\n/, '');
code = code.replace(/import FAQSection from '\.\.\/sections\/FAQSection';\n/, '');

fs.writeFileSync(file, code, 'utf-8');

const file2 = 'src/pages/ProductDetail.tsx';
let code2 = fs.readFileSync(file2, 'utf-8');
code2 = code2.replace(/const \{ id \} = useParams<\(\{ id: string \}\) | \{ slug: string \}>[^;]+;/, 'const { slug } = useParams<{ slug: string }>();');
code2 = code2.replace(/const product = id \? getProductById\(id\) : undefined;/, 'const product = slug ? getProductById(slug) : undefined;');
code2 = code2.replace(/const { id } = useParams<{ id: string }>();/, 'const { slug } = useParams<{ slug: string }>();\n  const [quantity, setQuantity] = useState(1);\n  const [activeImage, setActiveImage] = useState(0);\n  const { addToCart } = useCart();');

fs.writeFileSync(file2, code2, 'utf-8');

const file3 = 'src/sections/MarketplaceCategories.tsx';
let code3 = fs.readFileSync(file3, 'utf-8');
code3 = code3.replace(/, CATEGORY_COLORS/, '');
fs.writeFileSync(file3, code3, 'utf-8');
