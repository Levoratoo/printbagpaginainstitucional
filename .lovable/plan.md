

## Plan: Rewrite Contact Form to Use Web3Forms

### What changes
**Single file**: `src/pages/ContatoPage.tsx`

### Changes
1. **Remove** the Supabase import and all Supabase-related logic (`supabase.functions.invoke`, `getRecipientEmail`, `idempotencyKey`, etc.)
2. **Replace `handleSubmit`** with a `fetch` POST to `https://api.web3forms.com/submit` sending JSON with:
   - `access_key`: `"e234f2e3-f57d-47df-bc07-05a0e8aa7ca8"` (hardcoded)
   - `subject`: the selected assunto value
   - `from_name`: "Printbag Website"
   - `nome`, `empresa`, `assunto`, `email`, `telefone`, `mensagem` from form state
   - Conditional fields `tipoEmbalagem` and `volume` when "Fazer um orçamento" is selected
3. **Check response** (`response.ok` or `data.success`) and show success/error toast accordingly
4. **Keep everything else unchanged**: form layout, fields, validation, animations, map section, search params initialization

### Technical detail
```typescript
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "e234f2e3-f57d-47df-bc07-05a0e8aa7ca8",
    subject: `Contato Printbag: ${formData.assunto}`,
    from_name: "Printbag Website",
    nome: formData.nome,
    empresa: formData.empresa,
    assunto: formData.assunto,
    email: formData.email,
    telefone: formData.telefone,
    mensagem: formData.mensagem,
    ...(isOrcamento && {
      tipoEmbalagem: formData.tipoEmbalagem,
      volume: formData.volume,
    }),
  }),
});
const data = await response.json();
if (data.success) { /* toast success + reset */ }
else { /* toast error */ }
```

