# 양자군

# 개요

**양자군(quantum group)** 은 [Lie 대수](lie-algebras.md)의 보편포락대수를 매개변수 $q$ 로 변형한 Hopf 대수다. 변형해도 표현의 텐서곱은 정의되지만, 두 성분을 바꾸는 사상이 성분 교환이 아니라 $q$ 에 의존하는 행렬 $R$ 이 된다.

$R$ 은 Yang–Baxter 방정식을 만족하고 제곱이 항등이 아니다. 그래서 표현 범주는 [모노이드 범주](monoidal-categories.md)로서 꼬임을 갖지만 대칭이 아니고, 그 꼬임이 [땋임군](braid-groups.md)의 표현을 준다.

# 직관

땋임군의 표현을 선형대수로 만들려 한다. 가닥 $n$ 개의 땋임군은 생성원 $\sigma_1,\dots,\sigma_{n-1}$ 과 관계 $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ 로 주어지므로, 벡터공간 $V$ 의 텐서거듭제곱 $V^{\otimes n}$ 에서 이 관계를 만족하는 가역사상을 찾으면 된다.

$\mathfrak{sl}\_2$ 의 표현 $V$ 를 잡고 $\sigma(v\otimes w)=w\otimes v$ 를 쓴다. 이 사상은 $\mathfrak{sl}\_2$ 의 작용과 교환하고 위 관계도 만족하므로 표현이 하나 나온다. 그런데 $\sigma^2=\mathrm{id}$ 이므로 꼬는 것과 반대로 꼬는 것이 같아지고, 표현이 땋임군을 거쳐 대칭군의 표현으로 떨어진다. 땋임의 방향과 횟수는 상에서 사라진다.

$\sigma^2\neq\mathrm{id}$ 인 사상을 얻으려면 교환 사상 자리에 다른 것을 놓아야 하고, 그것이 표현의 작용과 교환하려면 작용하는 대수를 바꿔야 한다. 보편포락대수 $U(\mathfrak{sl}\_2)$ 의 교환관계에 $q$ 를 넣어 변형하면 작용과 교환하는 사상이 성분 교환이 아니라 $R$ 행렬이 되고, $V$ 가 2차원일 때 $R$ 의 고윳값은 $q^{1/2}$ 와 $-q^{-3/2}$ 로 서로 다르다. $q=1$ 에서는 두 고윳값이 $1$ 과 $-1$ 로 돌아가고 $R^2=\mathrm{id}$ 가 된다.

# 정의

## Hopf 대수

체 $k$ 위의 **Hopf 대수**는 결합대수 $A$ 에 대수준동형 $\Delta:A\to A\otimes A$ 와 $\varepsilon:A\to k$ , 선형사상 $S:A\to A$ 가 주어지고 다음을 만족하는 것이다.

- 쌍대결합법칙 $(\Delta\otimes\mathrm{id})\Delta=(\mathrm{id}\otimes\Delta)\Delta$ 와 쌍대단위법칙.
- 반대합 $S$ 에 대해 $m(S\otimes\mathrm{id})\Delta=\eta\varepsilon=m(\mathrm{id}\otimes S)\Delta$ , 여기서 $m$ 은 곱이고 $\eta$ 는 단위다.

$\Delta$ 가 두 표현의 텐서곱 위의 작용을 정하고 $S$ 가 쌍대표현 위의 작용을 정한다. 군환 $kG$ 는 $\Delta(g)=g\otimes g$, $S(g)=g^{-1}$ 로 Hopf 대수이고, 보편포락대수 $U(\mathfrak g)$ 는 $\Delta(x)=x\otimes 1+1\otimes x$, $S(x)=-x$ 로 Hopf 대수다.

## Uq(sl₂)

$q\in k$ 가 $0$ 도 $\pm1$ 도 아니라 하자. $U_q(\mathfrak{sl}\_2)$ 는 생성원 $E,F,K,K^{-1}$ 과 관계

$$KEK^{-1}=q^2E,\qquad KFK^{-1}=q^{-2}F,\qquad EF-FE=\frac{K-K^{-1}}{q-q^{-1}}$$

로 주어지는 대수이고, Hopf 구조는

$$\Delta(E)=E\otimes 1+K\otimes E,\qquad \Delta(F)=F\otimes K^{-1}+1\otimes F,\qquad \Delta(K)=K\otimes K$$

와 $\varepsilon(E)=\varepsilon(F)=0$, $\varepsilon(K)=1$, $S(E)=-K^{-1}E$, $S(F)=-FK$, $S(K)=K^{-1}$ 다.

$K=q^H$ 로 보고 $q\to1$ 로 보내면 셋째 관계의 우변이 $H$ 로 가고 $\mathfrak{sl}\_2$ 의 관계 $\lbrack E,F\rbrack=H$ 가 나온다. $\Delta(E)$ 도 $E\otimes1+1\otimes E$ 로 간다.

## Drinfeld–Jimbo 제시

대칭화 가능 Cartan 행렬 $(a_{ij})$ 가 주어지면 $U_q(\mathfrak g)$ 는 생성원 $E_i,F_i,K_i^{\pm1}$ 과 위와 같은 꼴의 관계, 그리고 $q$ 로 변형한 Serre 관계로 정의된다[^1]. $\Delta$ 는 지표마다 같은 식이다.

# 성질

## 준삼각성

*정의.* Hopf 대수 $A$ 가 **준삼각**이라는 것은 가역원 $R\in A\otimes A$ 가 있어 모든 $a\in A$ 에서 $\Delta^{\mathrm{op}}(a)=R\thinspace\Delta(a)\thinspace R^{-1}$ 이고 두 육각 항등식

$$(\Delta\otimes\mathrm{id})(R)=R\_{13}R\_{23},\qquad (\mathrm{id}\otimes\Delta)(R)=R\_{13}R\_{12}$$

가 성립하는 것이다. 여기서 $R\_{ij}$ 는 $A^{\otimes 3}$ 의 $i,j$ 번째 성분에 $R$ 을 넣은 것이다.

*정리.* 준삼각 Hopf 대수의 $R$ 은 Yang–Baxter 방정식

$$R\_{12}R\_{13}R\_{23}=R\_{23}R\_{13}R\_{12}$$

를 만족한다[^1]. 증명은 두 육각 항등식과 $\Delta^{\mathrm{op}}=R\Delta R^{-1}$ 를 $(\Delta\otimes\mathrm{id})(R)$ 에 함께 적용해 얻는다.

$U_q(\mathfrak g)$ 는 준삼각이다. $R$ 은 유한차원 표현마다 행렬로 실현되고, 형식적 멱급수 꼴로는 Cartan 부분에서 오는 인수와 근마다 붙는 $q$ 지수함수의 곱이다.

## 표현 범주의 꼬임

$R$ 에 성분 교환을 합성한 $c=\sigma\circ R$ 는 표현 $V,W$ 에 대해 $V\otimes W\to W\otimes V$ 인 사상이고 $U_q(\mathfrak g)$ 의 작용과 교환한다. 준삼각성의 두 육각 항등식이 모노이드 범주의 꼬임 공리가 되므로 유한차원 표현의 범주는 꼬임 모노이드 범주다.

$c\_{W,V}c\_{V,W}\neq\mathrm{id}$ 이므로 이 꼬임은 대칭이 아니다. $V^{\otimes n}$ 에서 $i$ 번째와 $i+1$ 번째 성분에 $c$ 를 넣은 사상들이 Yang–Baxter 방정식 때문에 땋임군의 관계를 만족하고, 그래서 땋임군의 표현이 하나 나온다.

$\mathfrak{sl}\_2$ 의 2차원 표현에서 이 표현의 지표를 매듭의 사영도형마다 모으면 Jones 다항식이 나온다. 같은 구성을 [모듈러 텐서범주](modular-tensor-categories.md)로 추상화한 것이 [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)이다.

## q 가 1 의 거듭제곱근인 경우

$q$ 가 1 의 원시 $\ell$ 제곱근이면 $E^{\ell}$ 과 $F^{\ell}$ 이 중심에 들어가고 표현론이 달라진다. 유한차원 표현의 범주는 반단순이 아니지만, 양자 차원이 $0$ 인 대상을 모은 부분을 지워 반단순 몫을 얻는다. 그 몫이 단순대상 유한개를 갖는 모듈러 텐서범주다.

## 결정화 기저

$q\to0$ 극한에서 $U_q(\mathfrak g)$ 의 적분형 표현은 기저를 하나 고를 수 있고, 생성원의 작용이 그 기저의 원소를 다른 원소 하나로 보내거나 $0$ 으로 보낸다[^2]. 표현의 텐서곱 분해와 가중치 중복도가 이 기저 위의 조합 규칙으로 계산된다. 변형하지 않은 $U(\mathfrak g)$ 에는 이런 기저가 없고, $q$ 를 넣은 덕에 생기는 구조다.

# 활용

- [땋임군](braid-groups.md): $R$ 행렬이 땋임군의 유한차원 표현을 주고, 그 표현에서 Jones 다항식과 HOMFLY(Hoste–Ocneanu–Millett–Freyd–Lickorish–Yetter) 다항식이 나온다.
- [모듈러 텐서범주](modular-tensor-categories.md): 1 의 거듭제곱근에서의 반단순 몫이 이 범주의 주요 예를 공급한다.
- [아핀 Lie 대수](affine-lie-algebras.md): 준위 $k$ 의 적분가능 표현이 이루는 융합 범주가 $q=e^{\pi i/(k+h)}$ 에서 양자군의 몫 범주와 동형이다.
- 반복 표현의 교환자 대수: $U_q(\mathfrak{sl}\_n)$ 이 $V^{\otimes m}$ 에 작용할 때 그 작용과 교환하는 대수가 A 형 Hecke 대수이고, 이 쌍이 [Schur–Weyl 쌍대성](schur-weyl-duality.md)의 변형이다.

[^1]: V. Chari and A. Pressley, *A Guide to Quantum Groups*, Cambridge University Press, 1994, 6장과 8장.
[^2]: M. Kashiwara, "On crystal bases of the $q$-analogue of universal enveloping algebras", *Duke Mathematical Journal* 63 (1991), 465–516.

# 연관 문서

## 선수지식

- [Lie 대수](lie-algebras.md)
- [모노이드 범주](monoidal-categories.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #category_theory #topology #group_theory
