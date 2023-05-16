SELECT
min(price) as faturamento_minimo,
max(price) as faturamento_maximo,
round(avg(price),2) as faturamento_medio,
round(sum(price),2) as faturamento_total
FROM SpotifyClone.users A 
LEFT JOIN SpotifyClone.membership B ON A.plan_id = B.plan_id
