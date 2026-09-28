# 에탈 코호몰로지

# 개요

에탈 코호몰로지는 대수다양체에 [층 코호몰로지](sheaf-cohomology.md)를 주되 Zariski 위상 대신 에탈 사상들이 이루는 위치 위에서 계산한 것이다. 유한체 위의 다양체에 위상적 코호몰로지와 같은 모양의 불변량을 준다.

계수는 $\mathbb Z/\ell^n$ 을 쓰고 $\ell$ 은 표수와 서로소로 잡는다. $\ell$ 진 코호몰로지는 역극한

$$
H^i(X_{\bar k},\mathbb Z_\ell)=\varprojlim_n H^i(X_{\bar k},\mathbb Z/\ell^n)
$$

로 정의한다. 유한체 위에서는 Frobenius 가 이 공간에 작용하고, 고정점의 개수가 그 작용의 자취로 나온다.

$$
\char35 X(\mathbb F_{q^m})=\sum_{i=0}^{2d}(-1)^i\thinspace\mathrm{tr}\bigl(F^m\mid H^i\_c(X_{\bar k},\mathbb Q_\ell)\bigr)
$$

이 자취 공식이 [Weil 추측](deligne-weil-conjectures.md)의 자리 세는 부분을 담당한다.

# 직관

## 상수층이 보이지 않는 위상

$X$ 를 대수적으로 닫힌 체 위의 곡선이라 하고 Zariski 위상에서 상수층 $\mathbb Z/n$ 의 코호몰로지를 계산한다. Zariski 열린집합은 유한 개의 점을 뺀 것이고 비어 있지 않은 두 열린집합은 반드시 만난다.

이 위상에서 $X$ 는 기약이고, 기약공간 위의 상수층은 무르기 때문에 $H^i=0$ $(i\ge1)$ 이다. $H^0$ 만 남으므로 이 방법으로는 곡선의 종수가 나오지 않는다.

## 열린집합 대신 덮개

[에탈 기본군](etale-fundamental-group.md)에서 원을 그리지 않고 덮개의 자기동형군만으로 같은 군을 얻었다. 코호몰로지에서도 같은 수를 쓴다. 열린 부분집합의 모임 대신 $X$ 로 가는 에탈 사상 $U\to X$ 의 모임을 열린집합처럼 다룬다.

에탈 사상은 국소적으로 유한 개의 조각으로 갈라지는 사상이다. 복소수 위에서라면 국소동형인 덮개이고, 그런 덮개들은 Zariski 열린집합보다 훨씬 많다. 덮개가 많아지면 층을 붙이는 조건이 세지고 코호몰로지가 살아난다.

## 계수의 제한

$X$ 가 표수 $p$ 이면 계수 $\mathbb Z/p$ 를 쓰지 않는다. Artin–Schreier 열 $0\to\mathbb Z/p\to\mathcal O_X\xrightarrow{t\mapsto t^p-t}\mathcal O_X\to0$ 이 에탈 위치에서 완전이므로 $\mathbb Z/p$ 의 코호몰로지가 $\mathcal O_X$ 의 것으로 계산되고, 그 차원이 위상적 답과 맞지 않는다. $\ell\neq p$ 에서만 맞는 답이 나온다.

# 정의

## 에탈 위치

$X$ 위의 **에탈 위치**는 대상이 에탈 사상 $U\to X$ 이고, 사상이 $X$ 위의 사상이며, 덮개가 $\lbrace U_i\to U\rbrace$ 로 상의 합집합이 $U$ 인 족인 위치다. 위상공간의 열린집합과 달리 $U_i$ 가 $U$ 의 부분집합일 필요가 없다.

## 에탈 층과 코호몰로지

에탈 위치 위의 층은 함자 $F$ 로, 모든 덮개에 대해

$$
F(U)\to\prod_i F(U_i)\rightrightarrows\prod_{i,j}F(U_i\times_UU_j)
$$

가 동등자가 되는 것이다. 아벨군 값 층들의 범주는 단사 대상을 충분히 가지므로 $\Gamma(X,-)$ 의 [우유도함자](derived-functors.md)로 $H^i(X_{\text{ét}},F)$ 를 정의한다.

## $\ell$ 진 코호몰로지

$$
H^i(X,\mathbb Z_\ell)=\varprojlim_n H^i(X,\mathbb Z/\ell^n),\qquad
H^i(X,\mathbb Q_\ell)=H^i(X,\mathbb Z_\ell)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell
$$

$\mathbb Q_\ell$ 을 상수층으로 둔 코호몰로지는 옳은 답을 주지 않으므로 역극한을 먼저 잡는다. 콤팩트 받침 판본 $H^i\_c$ 는 열린 매장의 확장 함자로 정의한다.

# 성질

## 비교 정리

$X$ 가 $\mathbb C$ 위의 유한형 스킴이면

$$
H^i(X_{\text{ét}},\mathbb Z/n)\cong H^i\_{\mathrm{sing}}(X(\mathbb C),\mathbb Z/n)
$$

이다.[^1] 에탈 코호몰로지가 위상적 코호몰로지를 확장한 것임이 이 동형에서 확인된다.

## 유한성과 소멸

$X$ 가 대수적으로 닫힌 체 위의 차원 $d$ 인 유한형 스킴이면 $H^i\_c(X,\mathbb Z/\ell^n)$ 이 유한군이고 $i\gt2d$ 에서 $0$ 이다. $X$ 가 고유하고 매끄러우면 Poincaré 쌍대성이 성립해 $H^i$ 와 $H^{2d-i}$ 가 짝을 이룬다.

## Frobenius 자취 공식

$X$ 가 $\mathbb F_q$ 위의 유한형 스킴이고 $F$ 가 기하적 Frobenius 이면

$$
\char35 X(\mathbb F_{q^m})=\sum_{i=0}^{2d}(-1)^i\thinspace\mathrm{tr}\bigl(F^m\mid H^i\_c(X_{\bar{\mathbb F}\_q},\mathbb Q_\ell)\bigr)
$$

이다.[^2] $X(\mathbb F_{q^m})$ 이 $F^m$ 의 고정점 집합이므로 이것은 Lefschetz 고정점 공식의 에탈 판본이다.

이 공식에서 zeta 함수가 유리함수임이 나온다. $Z(X,t)=\prod_i\det(1-Ft\mid H^i\_c)^{(-1)^{i+1}}$ 이 유리식이고, 함수방정식은 Poincaré 쌍대성이 준다. 고윳값의 절댓값이 $q^{i/2}$ 라는 마지막 조각이 Deligne 의 정리다.[^2]

## Galois 작용

$X$ 가 체 $k$ 위에 정의되어 있으면 $H^i(X_{\bar k},\mathbb Q_\ell)$ 에 $\mathrm{Gal}(\bar k/k)$ 가 연속으로 작용한다. 이 표현이 산술적 정보를 담으며, 곡선의 $H^1$ 은 [Jacobi 다양체](jacobian-variety.md)의 Tate 가군의 쌍대다.

# 활용

## Weil 추측

유한체 위 다양체의 점 개수를 자취로 바꾸고, 유한성과 쌍대성으로 zeta 함수의 유리성과 함수방정식을 얻는다. Grothendieck 이 이 구조를 세웠고 Deligne 이 고윳값의 크기를 증명했다.[^2]

## Galois 표현의 공급원

모듈러 곡선과 Shimura 다양체의 $\ell$ 진 코호몰로지가 자기동형 형식에 붙는 Galois 표현을 만든다. 모듈러성 정리와 [Langlands 강령](langlands-program.md)의 대응이 이 표현을 양쪽에서 견준다.

## 대수적 $K$ 이론의 계산

$K$ 군을 에탈 코호몰로지로 환원하는 Quillen–Lichtenbaum 추측이 Voevodsky 의 모티브 코호몰로지 작업으로 증명되었고, 유한체와 수체의 $K$ 군 계산이 그 환원을 쓴다.[^3]

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
