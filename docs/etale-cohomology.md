# 에탈 코호몰로지

# 개요

**에탈 코호몰로지(étale cohomology)** 는 대수다양체에 [층 코호몰로지](sheaf-cohomology.md)를 주되 Zariski 위상 대신 에탈 사상들이 이루는 위치 위에서 계산한 것이다. 유한체 $\mathbb F_q$ 위의 방정식 하나의 해를 $\mathbb F_q,\mathbb F_{q^2},\mathbb F_{q^3},\dots$ 에서 세면 수열이 나오고, Weil 은 이 수열이 복소 다양체에서 고정점을 세는 Lefschetz 공식처럼 행동하리라 보았다. 유한체 위의 다양체에서는 Zariski 위상이 너무 성겨 그런 공식을 줄 코호몰로지가 서지 않는다. 에탈 코호몰로지는 그 코호몰로지를 만들어, 해의 개수를 Frobenius 작용의 대각합으로 쓴다.

# 직관

$X$ 를 [복소수](complex-numbers.md) 위의 곡선 $\mathbb C\setminus\lbrace 0\rbrace$ 로 두면 위상공간으로서 원과 호모토피 동치이므로 $H^1(X,\mathbb Z/n)=\mathbb Z/n$ 이다. 같은 곡선을 대수다양체 $\mathbb G_m=\mathbb A^1\setminus\lbrace 0\rbrace$ 로 보고 Zariski 위상에서 상수층 $\mathbb Z/n$ 의 코호몰로지를 계산한다. Zariski 열린집합은 유한 개의 점을 뺀 것이어서 비어 있지 않은 두 열린집합은 반드시 만난다. 그러면 상수층의 제한사상이 모두 전사이고, 이런 무른 층(flasque sheaf)은 코호몰로지가 소멸하므로 $i\ge 1$ 에서 $H^i=0$ 이다.

열린집합이 적어서 소멸했으니 열린집합 대신 쓸 것을 늘린다. 복소수 위에서 $z\mapsto z^n$ 은 $\mathbb C\setminus\lbrace 0\rbrace$ 를 $n$ 겹으로 덮는 덮개이고, 원을 $n$ 번 감는 사상과 같아 $H^1$ 의 생성원을 준다. 대수적으로 $x\mapsto x^n$ 은 $\mathbb G_m\to\mathbb G_m$ 의 사상이지만 상이 열린 부분집합이 아니라 $\mathbb G_m$ 전체이므로 Zariski 위상에서는 보이지 않는다. [에탈 기본군](etale-fundamental-group.md)이 이런 덮개로 기본군을 얻은 것과 같이, 열린 부분집합의 모임 대신 $X$ 로 가는 에탈 사상의 모임 위에서 층과 코호몰로지를 정의하면 $x\mapsto x^n$ 이 $H^1(\mathbb G_m,\mathbb Z/n)$ 의 원소를 정하고 답이 $\mathbb Z/n$ 이 된다.

# 정의

## 에탈 위치

스킴 $X$ 위의 **에탈 위치(étale site)** $X_{\text{ét}}$ 는 대상이 에탈 사상 $U\to X$ 이고, 사상이 $X$ 위의 사상이며, 덮개가 상의 합집합이 $U$ 인 에탈 사상의 족 $\lbrace U_i\to U\rbrace$ 인 위치(site)다. 위상공간의 열린집합과 달리 $U_i$ 가 $U$ 의 부분집합일 필요가 없다. 대수적으로 닫힌 체의 표수가 $n$ 을 나누지 않으면 $x\mapsto x^n$ 은 에탈 사상이고, 직관 절의 $\lbrace\mathbb G_m\xrightarrow{x\mapsto x^n}\mathbb G_m\rbrace$ 은 원소 하나로 된 덮개다.

## 에탈 층과 코호몰로지

**에탈 층(étale sheaf)** 은 $X_{\text{ét}}$ 의 대상에 집합이나 아벨군을 주는 반변 함자 $F$ 로, 모든 덮개에 대해 다음이 동등자(equalizer)인 것이다.

$$
F(U)\to\prod_i F(U_i)\rightrightarrows\prod_{i,j}F(U_i\times_UU_j)
$$

상수층 $\mathbb Z/n$ 은 연결인 $U$ 에 $\mathbb Z/n$ 을 주고, 층 $\mu_n$ 은 $U$ 에 $\mathcal O(U)$ 의 $n$ 제곱근 $1$ 들의 군을 준다. 아벨군 값 층들의 범주는 단사 대상을 충분히 가지므로 $\Gamma(X,-)$ 의 [우유도함자](derived-functors.md)로 **에탈 코호몰로지** $H^i(X_{\text{ét}},F)$ 를 정의한다. 직관 절의 계산은 $H^1(\mathbb G_{m,\text{ét}},\mathbb Z/n)=\mathbb Z/n$ 이다.

## ℓ 진 코호몰로지

$\ell$ 을 표수와 다른 소수로 두고 다음을 **$\ell$ 진 코호몰로지($\ell$-adic cohomology)** 라 한다.

$$
H^i(X,\mathbb Z_\ell)=\varprojlim_n H^i(X_{\text{ét}},\mathbb Z/\ell^n),\qquad
H^i(X,\mathbb Q_\ell)=H^i(X,\mathbb Z_\ell)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell
$$

$\mathbb G_m$ 에서는 $H^1(\mathbb G_m,\mathbb Z/\ell^n)=\mathbb Z/\ell^n$ 의 역극한이므로 $H^1(\mathbb G_m,\mathbb Z_\ell)=\mathbb Z_\ell$ 이다. $X$ 를 고유 스킴 $\bar X$ 의 열린 부분스킴 $j\colon X\to\bar X$ 로 넣고 $H^i\_c(X,F)=H^i(\bar X_{\text{ét}},j_!F)$ 로 둔 것을 **콤팩트 받침 코호몰로지(compactly supported cohomology)** 라 한다.

# 성질

## 이산 계수 ℤℓ 의 소멸

$X$ 가 정규이고 연결이면 상수층 $A$ 에 대해 $H^1(X_{\text{ét}},A)$ 는 에탈 기본군에서 $A$ 로 가는 연속 준동형의 군이다. 이산군 $\mathbb Z_\ell$ 을 상수층으로 두면 사유한군의 연속 준동형의 상은 유한군이고 $\mathbb Z_\ell$ 의 유한 부분군은 $0$ 뿐이므로 $H^1=0$ 이다. 그래서 유한 계수에서 계산하고 역극한을 잡는다.

## 비교 정리

$X$ 가 $\mathbb C$ 위의 유한형 스킴이면 다음이 성립한다.[^1]

$$
H^i(X_{\text{ét}},\mathbb Z/n)\cong H^i\_{\mathrm{sing}}(X(\mathbb C),\mathbb Z/n)
$$

$X=\mathbb G_m$ 이면 양쪽이 $i=0,1$ 에서 $\mathbb Z/n$ 이다.

## 계수의 제한

$X$ 의 표수가 $p$ 이면 계수 $\mathbb Z/p$ 에서는 $\ell$ 계수와 크기가 다른 답이 나온다. [Artin–Schreier 이론](artin-schreier-theory.md)의 열 $0\to\mathbb Z/p\to\mathcal O_X\xrightarrow{t\mapsto t^p-t}\mathcal O_X\to0$ 이 에탈 위치에서 완전이므로 $\mathbb Z/p$ 의 코호몰로지가 $\mathcal O_X$ 의 코호몰로지로 계산된다. 대수적으로 닫힌 체 위의 타원곡선 $E$ 에서 $H^1(E,\mathbb Z/p)$ 는 $0$ 이거나 $\mathbb Z/p$ 이고, $\ell\ne p$ 이면 $H^1(E,\mathbb Z/\ell)=(\mathbb Z/\ell)^2$ 이다.

## 유한성과 쌍대성

$X$ 가 대수적으로 닫힌 체 위의 차원 $d$ 인 유한형 스킴이고 $\ell$ 이 표수와 다르면 $H^i\_c(X,\mathbb Z/\ell^n)$ 은 유한군이고 $i\gt 2d$ 에서 $0$ 이다. $X$ 가 고유하고 매끄러우면 [Poincaré 쌍대성](poincare-duality.md)이 성립해 $H^i$ 와 $H^{2d-i}$ 가 짝을 이룬다.

## Frobenius 자취 공식

$X$ 가 $\mathbb F_q$ 위의 차원 $d$ 인 유한형 스킴이고 $F$ 가 기하적 Frobenius 이면 다음이 성립한다.[^2]

$$
\char35{}X(\mathbb F_{q^m})=\sum_{i=0}^{2d}(-1)^i\thinspace\mathrm{tr}\bigl(F^m\mid H^i\_c(X_{\bar{\mathbb F}\_q},\mathbb Q_\ell)\bigr)
$$

$X(\mathbb F_{q^m})$ 은 $F^m$ 의 고정점 집합이므로 이 공식은 [Lefschetz 고정점 정리](lefschetz-fixed-point.md)의 에탈 판본이다. $X=\mathbb G_m$ 이면 $H^0\_c=0$, $H^1\_c=\mathbb Q_\ell$ 에 $F$ 가 $1$ 로, $H^2\_c=\mathbb Q_\ell$ 에 $F$ 가 $q$ 로 작용하므로 우변이 $q^m-1$ 이고, 이것은 $\mathbb F_{q^m}^\times$ 의 원소 수다.

이 공식에서 zeta 함수 $Z(X,t)=\prod_i\det(1-Ft\mid H^i\_c)^{(-1)^{i+1}}$ 이 유리함수라는 것이 나오고, 함수방정식은 Poincaré 쌍대성에서 나온다. $X$ 가 매끄럽고 사영적이면 $H^i$ 위 $F$ 의 고윳값의 절댓값이 $q^{i/2}$ 라는 것이 Deligne 의 정리다.[^2] 세 진술은 [Weil 추측](deligne-weil-conjectures.md)이다.

## Galois 작용

$X$ 가 체 $k$ 위에 정의되어 있으면 $H^i(X_{\bar k},\mathbb Q_\ell)$ 에 $\mathrm{Gal}(\bar k/k)$ 가 연속으로 작용한다. 곡선의 $H^1$ 은 [Jacobi 다양체](jacobian-variety.md)의 Tate 가군(Tate module)의 쌍대다. $\mathbb G_m$ 에서는 $H^1(\mathbb G_{m,\bar k},\mathbb Z_\ell)$ 이 $\mu_{\ell^n}$ 들의 역극한의 쌍대이고, Galois 군은 원분 지표(cyclotomic character)의 역으로 작용한다. 이 계산은 [Kummer 이론](kummer-theory.md)의 $\mu_n$ 덮개 계산이다.

# 활용

- Weil 추측의 증명. 유한체 위 다양체의 점 개수를 위 자취 공식으로 Frobenius 의 대각합으로 쓰고, 유한성과 쌍대성으로 zeta 함수의 유리성과 함수방정식을 얻는다. Grothendieck 이 이 부분을 증명했고 Deligne 이 고윳값의 크기를 증명했다.[^2]
- Galois 표현의 구성. [모듈러 곡선](modular-curves.md)과 [Shimura 다양체](shimura-varieties.md)의 $\ell$ 진 코호몰로지에서 자기동형 형식에 붙는 [Galois 표현](galois-representations.md)이 만들어진다. 모듈러성 정리(modularity theorem)와 [Langlands 강령](langlands-program.md)은 이 표현과 자기동형 형식을 대응시킨다.
- [대수적 K 이론](algebraic-k-theory.md)의 계산. $K$ 군을 에탈 코호몰로지와 비교하는 Quillen–Lichtenbaum 추측(Quillen–Lichtenbaum conjecture)이 Voevodsky 의 모티브 코호몰로지(motivic cohomology) 작업으로 증명되었고, 유한체와 수체의 $K$ 군 계산이 이 비교를 쓴다.[^3]

[^1]: M. Artin, A. Grothendieck, J.-L. Verdier, *Théorie des topos et cohomologie étale des schémas* (SGA 4), Lecture Notes in Math. 269, 270, 305, Springer (1972–73). 교과서 서술은 J. Milne, *Étale Cohomology*, Princeton (1980) 3 장이다.
[^2]: P. Deligne, *La conjecture de Weil. I*, Publ. Math. Inst. Hautes Études Sci. **43** (1974), 273–307. 자취 공식과 유리성은 A. Grothendieck, *Formule de Lefschetz et rationalité des fonctions L*, Séminaire Bourbaki 279 (1965).
[^3]: V. Voevodsky, *On motivic cohomology with $\mathbb Z/\ell$ coefficients*, Ann. of Math. **174** (2011), 401–438.

# 연관 문서

## 선수지식

- [층 코호몰로지](sheaf-cohomology.md)
- [에탈 기본군](etale-fundamental-group.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #number_theory #field_theory #category_theory
