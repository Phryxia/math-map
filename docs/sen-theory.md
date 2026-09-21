# Sen 이론과 Hodge–Tate 무게

# 개요

[p 진 Hodge 이론](p-adic-hodge-theory.md)의 가장 아래 칸인 $B_{\mathrm{HT}}$ 에서 Hodge–Tate 표현이 정의되고 **Hodge–Tate 무게**가 붙는다. 그 정의는 $\mathbb C_p\otimes V$ 가 $\mathbb C_p(h_i)$ 들의 직합으로 쪼개진다는 형태라서, 주어진 표현이 조건을 만족하는지 확인할 방법을 주지 않는다.

Sen 이론은 그 확인을 행렬 계산 하나로 바꾼다. 순환분체 확장 $K_\infty/K$ 의 Galois 군 $\Gamma\cong\mathbb Z_p^\times$ 의 작용을 무한소로 미분해 얻는 선형작용소가

$$
\Theta=\lim_{n\to\infty}\frac{\log\bigl(\gamma^{p^n}\bigr)}{p^n\log\chi(\gamma)}
$$

곧 **Sen 작용소**다. $V$ 가 Hodge–Tate 인 것과 $\Theta$ 가 대각화 가능하고 고유값이 정수인 것이 동치이며, 그때 고유값이 정확히 Hodge–Tate 무게다. $\Gamma$ 가 $p$ 진 Lie 군이므로 군 작용을 Lie 대수 작용으로 미분하는 구도가 그대로 쓰인다.

판정이 선형대수가 되어 계산 가능해지고, Hodge–Tate 가 아닌 표현에도 $\Theta$ 가 존재하므로 **일반화된 Hodge–Tate 무게**라는 개념이 생긴다. $p$ 진 자기동형 형식의 족에서 무게가 정수 아닌 $p$ 진수로 변할 때도 Sen 작용소는 정의된다.

# 직관

## $\mathbb C_p$ 위의 표현으로의 하강

출발점은 Tate 의 계산이다.

$$
H^0(G_K,\mathbb C_p(k))=\begin{cases}K,&k=0\cr 0,&k\neq0\end{cases},\qquad
H^1(G_K,\mathbb C_p)=K
$$

$k\neq0$ 에서 불변식이 0 이라는 사실이 $\mathbb C_p(k)$ 들을 구별한다. Hodge–Tate 조건은 $\mathbb C_p\otimes V$ 가 이런 조각들로 쪼개진다는 것이고, 각 조각의 $k$ 가 무게다.

$G_K$ 는 너무 크므로 두 단계로 나눈다.

$$
K\subset K_\infty=K(\mu_{p^\infty})\subset\bar K,\qquad
\Gamma=\mathrm{Gal}(K_\infty/K)\cong\mathbb Z_p^\times\ \text{(열린 부분군까지)}
$$

$H_K=\mathrm{Gal}(\bar K/K_\infty)$ 쪽은 Ax–Sen–Tate 및 Sen 의 완비 하강으로 처리되어 $\mathbb C_p$ 반선형 표현이 $K_\infty$ 위의 유한차원 공간으로 내려온다. 남는 $\Gamma$ 는 1 차원 $p$ 진 Lie 군이므로 미분할 수 있다.

## $\Gamma$ 작용의 미분

$V=\mathbb C_p(k)$ 에서 $\gamma\in\Gamma$ 는 $\chi(\gamma)^k$ 로 작용한다. 로그를 취해 $\log\chi(\gamma)$ 로 나누면

$$
\Theta=\frac{\log\chi(\gamma)^k}{\log\chi(\gamma)}=k
$$

가 되어 지수에 있던 무게가 내려온다. 일반의 $V$ 에서는 같은 계산이 행렬로 일어나고, $\Theta$ 는 $\Gamma$ 작용의 무한소 생성원이다.

극한이 필요한 것은 $\gamma$ 하나로는 로그 급수가 수렴하지 않을 수 있기 때문이다. $\gamma^{p^n}$ 은 항등원에 충분히 가까워 수렴하고, 그 값을 $p^n$ 으로 나누면 $n$ 에 무관한 극한이 나온다.

## 대각화 가능성

$\Theta$ 가 대각화 가능하면 $\mathbb C_p\otimes V$ 가 고유공간으로 쪼개지고, 고유값이 정수 $k$ 면 각 조각이 $\mathbb C_p(k)$ 다.

$$
\Theta\ \text{대각화 가능 + 정수 고유값}\ \Longleftrightarrow\ \text{Hodge–Tate}
$$

조건이 깨지는 경우가 둘이다. 고유값이 정수가 아니면 $\mathbb C_p(k)$ 꼴이 아니며, $p$ 진 족에서 나타난다. 고유값이 정수인데 대각화가 안 되면 같은 무게 둘이 비자명하게 엮여 있다는 뜻이고, $\Theta$ 의 멱영 부분이 그 엮임을 잰다.

두 번째는 기하에서 나온다. 나쁜 곱셈 환원을 갖는 타원곡선의 Tate 가군은 $\begin{pmatrix}\chi&\ast\cr 0&1\end{pmatrix}$ 꼴인데 확장이 갈라지지 않아 Hodge–Tate 가 아니다.

# 정의

## 순환분체 확대와 $\mathbb C_p$ 표현

$K/\mathbb Q_p$ 를 유한 확장, $K_\infty=K(\mu_{p^\infty})$ , $\Gamma=\mathrm{Gal}(K_\infty/K)$ 로 두고, $\chi:\Gamma\to\mathbb Z_p^\times$ 를 순환분체 지표, $\widehat{K_\infty}$ 를 $K_\infty$ 의 완비화라 한다. $W$ 는 $\mathbb C_p$ 위의 유한차원 반선형 $G_K$ 표현이며, 예를 들어 $W=\mathbb C_p\otimes_{\mathbb Q_p}V$ 다.

> **정리 (Sen).** $W$ 에는 $\Gamma$ 안정인 $K_\infty$ 위의 유한차원 부분공간 $W_{K_\infty}$ 가 있고, $\mathbb C_p\otimes_{K_\infty}W_{K_\infty}\cong W$ 다. 이 하강은 충분히 큰 부분에 대해 유일하다.

## Sen 작용소

$W_{K_\infty}$ 의 기저에서 $\gamma$ 의 행렬을 $A(\gamma)$ 라 하자. $\gamma$ 가 1 에 충분히 가까우면 행렬 로그가 수렴하고

$$
\Theta=\frac{\log A(\gamma)}{\log\chi(\gamma)}
$$

가 $\gamma$ 의 선택에 무관하다. 이것이 **Sen 작용소**다. 기저를 바꾸면 $\Theta$ 가 켤레되므로 고유값은 불변이고, 그 고유값을 **일반화된 Hodge–Tate 무게**라 한다.

> **정리 (Sen).** $V$ 가 $G_K$ 의 $p$ 진 표현일 때 다음이 동치다.
> 1. $V$ 가 Hodge–Tate.
> 2. $\Theta$ 가 대각화 가능하고 고유값이 전부 정수.
>
> 이때 고유값의 모임(중복도 포함)이 $V$ 의 Hodge–Tate 무게다.

$V$ 가 de Rham 이면 Hodge–Tate 이므로 $\Theta$ 의 대각화 가능성은 de Rham 판정의 필요조건 검사로 쓰인다.

# 성질

## Sen 작용소가 담는 정보

$\Theta$ 는 Hodge–Tate 무게만 본다. $B_{\mathrm{dR}}$ 이 보는 여과와 $B_{\mathrm{cris}}$ 가 보는 Frobenius 는 $\Theta$ 에 나타나지 않으므로, Sen 이론은 네 층 가운데 가장 아래 층만 해명한다.

확장은 여럿이다. $B_{\mathrm{dR}}$ 수준의 Sen 작용소(Fontaine), $(\varphi,\Gamma)$ 가군 위에서의 Sen 작용소(Colmez, Kedlaya–Liu), 프리즘 관점(Bhatt–Lurie)이 모두 $\Gamma$ 작용을 미분해 얻은 작용소가 표현의 불변량을 담는다는 착상을 따른다.

# 활용

## $p$ 진 족

고전적 무게에서 $\Theta$ 의 고유값은 정수다. Coleman–Mazur 고윳값 곡선처럼 자기동형 형식의 $p$ 진 족을 다루면 무게가 $p$ 진적으로 변해 Hodge–Tate 무게가 정수가 아니게 되지만, $\Theta$ 는 여전히 정의된다. 일반화된 Hodge–Tate 무게는 족 위에서 해석적으로 변하고 곡선 위의 함수로 읽힌다.

## de Rham 성의 검사

Fontaine–Mazur 추측 쪽 작업에서 표현이 기하에서 오는지 판정하려면 de Rham 성을 확인해야 한다. $\Theta$ 의 고유값이 정수가 아니거나 대각화되지 않으면 즉시 탈락이므로, 계산 가능한 필요조건으로 쓰인다.

## 국소 Langlands 의 $p$ 진 판

$(\varphi,\Gamma)$ 가군의 언어에서 $\Gamma$ 작용의 미분이 Sen 작용소이고, $p$ 진 국소 Langlands 대응에서 무한소 자료의 역할을 한다. $\mathrm{GL}\_2(\mathbb Q_p)$ 의 Colmez 대응에서 Sen 무게가 표현 쪽의 무한소 지표로 옮겨간다. 아르키메데스 자리에서 $(\mathfrak g,K)$ 가군의 무한소 지표가 하던 일을 $p$ 진 자리에서 $\Theta$ 가 한다.

# 연관 문서

## 선수지식

- [p 진 Hodge 이론과 Fontaine 주기환](p-adic-hodge-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #linear_algebra
