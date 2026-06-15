import re
import os

images = os.listdir("public/images/products/")

with open("src/data/products.ts", "r") as f:
    content = f.read()

# Define the exact image mapping manually or programmatically
image_mapping = {
    'tirzepatide': 'tirzepatide_10mg.webp',
    'semaglutide': 'semaglutide_2_4mg.webp',
    'cjc-1295-dac': 'cjc_1295_with_dac_2mg.webp',
    'cjc-1295-no-dac': 'cjc_1295_no_dac_100mcg.webp',
    'ipamorelin': 'ipamorelin_200mcg.webp',
    'tesamorelin': 'tesamorelin_2mg.webp',
    'aod-9604': 'aod_9604_300mcg.webp',
    'thymosin-alpha-1': 'thymosin_alpha_1_1mg.webp',
    'epithalon': 'epithalon_10mg.webp',
    'semax': 'semax_500mcg.webp',
    'selank': 'selank_500mcg.webp',
    'dsip': 'dsip_200mcg.webp',
    'kpv': 'kpv_200mcg.webp',
    'melanotan-ii': 'melanotan_ii_1mg.webp',
    'pt-141': 'pt_141_2mg.webp',
    'mots-c': 'mots_c_100mcg.webp',
    'igf-1-lr3': 'igf_1_lr3_100mcg.webp',
    'kisspeptin-10': 'kisspeptin_10_500mcg.webp',
    'wolverine-stack': 'wolverine_stack_10mg.webp',
    'growth-stack': 'growth_stack_2mg_100mcg.webp',
    'glow-stack': 'glow_stack_5mg.webp',
    'bacteriostatic-water': 'bacteriostatic_water.webp',
    'glutathione': 'glutathione_antioxidant.webp'
}

for prod_id, img_name in image_mapping.items():
    # Find relatedIds: [...]
    pattern = r"(id: '" + prod_id + r"'[\s\S]*?relatedIds: \[[^\]]*\](?!,\s*image))"
    replacement = r"\1,\n    image: '/images/products/" + img_name + r"'"
    content = re.sub(pattern, replacement, content)

# Remove incorrect image from 5-amino-1mq
content = re.sub(r"(id: '5-amino-1mq'[\s\S]*?relatedIds: \['mots-c', 'aod-9604', 'epithalon'\],)\s*image: '/images/products/retatrutide_10mg\.webp',", r"\1", content)

with open("src/data/products.ts", "w") as f:
    f.write(content)
