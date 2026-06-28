**Button** — the pill control; use for every action. The only filled button is white (`primary`); use `mint` for the single neon CTA per viewport, `ghost` for secondary, `quiet` for low-priority.

```jsx
<Button variant="primary">Смотреть работы</Button>
<Button variant="mint" as="a" href="#works">Открыть сайт →</Button>
<Button variant="ghost">Подробнее</Button>
```

Props: `variant` (primary · ghost · mint · quiet), `size` (sm · md · lg), `as` ('button' | 'a').
