# Néron 모델

# 개요

**Néron 모델(Néron model)** 은 [이산부값환](discrete-valuation-rings.md) $R$ 의 분수체 $K$ 위의 [아벨 다양체](abelian-varieties.md) $A$ 를 $R$ 위로 넓힌 매끄러운 군 스킴(group scheme) 가운데, $K$ 위의 점이 전부 $R$ 위의 점으로 넓혀지는 것이다. 모든 아벨 다양체에 존재하고 동형을 빼면 유일하다. 그 특수 올이 $A$ 의 환원을 군으로 정해 주고, 특수 올의 성분 개수에서 Tamagawa 수가 나온다.

# 직관

[타원곡선](elliptic-curves.md) $E\colon y^2=x^3+x^2+p^2$ 을 $p$ 진수체 $\mathbb Q_p$ 위에서 본다($p$ 는 홀수). 점을 법 $p$ 로 환원해 $\mathbb F_p$ 위의 곡선의 점으로 보내고 싶다. 계수를 법 $p$ 로 줄이면 $y^2=x^3+x^2=x^2(x+1)$ 이고, 이 곡선은 $(0,0)$ 에서 두 가지 $y=\pm x$ 가 엇갈리는 특이점을 가진다.

특이점을 뺀 나머지 점들은 할선과 접선으로 정한 덧셈에서 군을 이루고, 이 군은 곱셈군 $\mathbb F_p^\times$ 와 같다. 그런데 $E$ 의 점 $(0,p)$ 는 $0+0+p^2=p^2$ 이므로 $E(\mathbb Q_p)$ 에 속하고, 법 $p$ 로 줄이면 특이점 $(0,0)$ 으로 간다. 환원 사상이 특이점을 뺀 군으로 들어가지 않는다.

특이점을 뺀 군으로 가는 점들만 모으면 $E(\mathbb Q_p)$ 의 부분군 $E_0(\mathbb Q_p)$ 이 된다. 이 예에서 $E(\mathbb Q_p)/E_0(\mathbb Q_p)$ 는 위수 $2$ 이고 $(0,p)$ 가 그 생성원이다. 버린 점들까지 받으려면 특수 올에 특이점 대신 $\mathbb F_p^\times$ 의 사본 하나를 더 붙여 성분이 두 개인 군을 만든다. 그렇게 만든 $\mathbb Z_p$ 위의 군이 $E$ 의 Néron 모델이고, 성분의 개수 $2$ 가 Tamagawa 수다.

# 정의

$R$ 을 이산부값환, $K$ 를 분수체, $k$ 를 잉여체(residue field), $A$ 를 $K$ 위의 아벨 다양체라 하자.

## Néron 모델

$R$ 위의 매끄럽고 분리된 유한형 군 스킴 $\mathcal A$ 가 일반 올(generic fiber) $\mathcal A_K\cong A$ 를 가지고 다음 Néron 사상 성질(Néron mapping property)을 만족하면 $\mathcal A$ 를 $A$ 의 Néron 모델이라 한다.

$$
\mathcal A(S)\xrightarrow{\ \sim\ }A(S_K)\qquad(S\text{ 는 }R\text{ 위의 매끄러운 스킴})
$$

$S=\mathrm{Spec}\thinspace R$ 로 두면 $\mathcal A(R)=A(K)$ 이다. 곧 $K$ 위의 모든 점이 $R$ 위의 점으로 넓혀진다. 수체 $K$ 위의 아벨 다양체는 각 소아이디얼의 국소화에서 얻은 Néron 모델을 붙여 $\mathrm{Spec}\thinspace O_K$ 위의 Néron 모델을 얻는다.

## 성분군과 Tamagawa 수

특수 올(special fiber) $\mathcal A_k$ 의 항등원 성분을 $\mathcal A_k^0$ 이라 하면 몫 $\Phi=\mathcal A_k/\mathcal A_k^0$ 은 유한 에탈 군 스킴이고 이를 **성분군(component group)** 이라 한다. $c=\vert\Phi(k)\vert$ 를 **Tamagawa 수(Tamagawa number)** 라 한다. $k$ 가 유한체이면 $c=\lbrack A(K):A_0(K)\rbrack$ 이고, $A_0(K)$ 는 항등원 성분으로 가는 점들의 부분군이다.

$\mathcal A_k$ 가 아벨 다양체이면 $A$ 가 **좋은 환원(good reduction)** 을 가진다고 한다.

# 성질

## 존재와 유일성

모든 아벨 다양체는 Néron 모델을 가진다[^1]. 유일성은 사상 성질에서 나온다. 두 Néron 모델 $\mathcal A$, $\mathcal A'$ 이 있으면 항등사상 $A\to A$ 가 사상 성질에 의해 $\mathcal A\to\mathcal A'$ 와 $\mathcal A'\to\mathcal A$ 로 넓혀지고 둘의 합성이 항등사상이다.

Néron 모델이 $R$ 위에서 고유(proper)한 것은 $A$ 가 좋은 환원을 가질 때뿐이다. 직관 절의 예에서 특수 올은 $\mathbb F_p^\times$ 의 사본 두 개이므로 고유하지 않다.

## 타원곡선의 경우

타원곡선 $E$ 의 Néron 모델은 $E$ 의 최소 정칙 고유 모델(minimal proper regular model)에서 특이점을 가진 올 성분의 특이점을 뺀 매끄러운 부분이다. 항등원 성분 $\mathcal E_k^0$ 은 환원의 종류에 따라 셋 가운데 하나다.

| 환원 | 항등원 성분 | 직관 절의 꼴 |
| --- | --- | --- |
| 좋은 환원 | 타원곡선 | 특이점이 없다 |
| 곱셈적 환원(multiplicative reduction) | 곱셈군 | 두 가지가 엇갈리는 특이점 |
| 덧셈적 환원(additive reduction) | 덧셈군 | 첨점 |

성분군은 Kodaira 기호(Kodaira symbol)로 분류된다[^2]. $\mathrm I_n$ 형은 $\mathbb Z/n$, $\mathrm I_n^\ast$ 형은 $n$ 이 짝수이면 $(\mathbb Z/2)^2$ 이고 홀수이면 $\mathbb Z/4$, $\mathrm{III}$ 과 $\mathrm{III}^\ast$ 형은 $\mathbb Z/2$, $\mathrm{IV}$ 와 $\mathrm{IV}^\ast$ 형은 $\mathbb Z/3$, $\mathrm{II}$ 와 $\mathrm{II}^\ast$ 형은 자명군이다. 직관 절의 곡선은 판별식의 $p$ 진 부값이 $2$ 인 $\mathrm I_2$ 형이고, 두 가지의 기울기 $\pm 1$ 이 $\mathbb F_p$ 에 있으므로 $\Phi(\mathbb F_p)=\mathbb Z/2$ 이다. Weierstrass 방정식에서 Kodaira 기호와 $c$ 를 정하는 절차가 Tate 알고리즘(Tate's algorithm)이다.

## Néron–Ogg–Shafarevich 판정법

$\ell$ 을 $k$ 의 표수와 다른 소수라 하자. $A$ 가 좋은 환원을 가지는 것은 관성군(inertia group)이 $\ell$ 진 Tate 가군(Tate module) $T\_\ell(A)$ 에 자명하게 작용하는 것과 동치다[^3]. 환원이라는 기하적 조건이 [Galois 표현](galois-representations.md)의 [분기군](ramification-groups.md) 조건으로 바뀐다.

## 반안정 환원 정리

$K$ 의 유한 확대 $L$ 을 적당히 잡으면 $A_L$ 의 Néron 모델의 항등원 성분 $\mathcal A_k^0$ 은 아벨 다양체를 원환면(torus)으로 확대한 것이 된다[^3]. 이런 환원을 반안정 환원(semistable reduction)이라 하고, 덧셈군 부분이 확대로 사라진다. 타원곡선에서는 덧셈적 환원이 확대 뒤에 좋은 환원이나 곱셈적 환원이 된다는 진술이다.

# 활용

- [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md). 강한 꼴의 공식에 나쁜 환원 자리마다 Tamagawa 수 $c_p$ 가 곱해진다.
- [Faltings 정리](faltings-theorem.md). Faltings 높이는 $\mathrm{Spec}\thinspace O_K$ 위의 Néron 모델의 영 절단으로 당긴 미분형식의 계량으로 정의된다.
- [Tate 곡선](tate-curve.md). 분할 곱셈적 환원을 가진 타원곡선은 $K^\times/q^{\mathbb Z}$ 로 적히고, 성분군 $\mathbb Z/\mathrm{ord}(q)$ 가 Néron 모델의 성분군과 같다.

[^1]: A. Néron, Modèles minimaux des variétés abéliennes sur les corps locaux et globaux, *Publ. Math. IHÉS* **21** (1964), 5–128. 현대적 서술은 S. Bosch, W. Lütkebohmert, M. Raynaud, *Néron Models*, Springer (1990).
[^2]: J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves*, Springer, Graduate Texts in Mathematics 151 (1994), 4장. Kodaira 기호, 성분군, Tate 알고리즘을 다룬다.
[^3]: J.-P. Serre, J. Tate, Good reduction of abelian varieties, *Ann. of Math.* **88** (1968), 492–517. 반안정 환원 정리의 일반 꼴은 A. Grothendieck, Séminaire de Géométrie Algébrique du Bois-Marie 7 I, Exposé IX (1972).

# 연관 문서

## 선수지식

- [아벨 다양체](abelian-varieties.md)
- [이산부값환](discrete-valuation-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra
