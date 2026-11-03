# 수술 이론

# 개요

**수술 이론(surgery theory)** 은 주어진 호모토피 유형을 실현하는 [다양체](manifolds.md)가 있는지, 몇 개인지 묻고 그 답을 대수적 장애군으로 적는 이론이다. 어떤 공간이 다양체처럼 쌍대성을 만족해도, 그것과 호모토피 동치인 닫힌 다양체가 있는지는 바로 알 수 없다. 토러스에서 원 하나를 따라 띠를 잘라 내고 두 구멍을 원판으로 막으면 구면이 되듯, 비슷한 다양체에서 출발해 남는 구면을 하나씩 잘라 내고 다른 조각을 붙여 목표에 맞추며, 끝까지 맞출 수 있는지는 중간 차수의 교차수로 판정한다.

# 직관

$X$ 를 유한 복합체라 하고 $X$ 가 $n$ 차원 [Poincaré 쌍대성](poincare-duality.md)을 만족한다고 하자. $X$ 와 호모토피 동치인 닫힌 $n$ 다양체가 있는지 묻는다. 다양체부터 출발해 호모토피형을 맞추는 쪽이 다루기 쉽다. 기본류를 기본류로 보내는 사상 $f:M\to X$ 가 있을 때 핵 $K_\ast=\ker(f_\ast:H_\ast(M)\to H_\ast(X))$ 를 없애면, $X$ 가 단순연결인 경우 Whitehead 정리로 $f$ 가 호모토피 동치가 된다.

핵의 원소 하나를 없애는 조작이 수술이다. $\alpha\in\pi_k(M)$ 을 매장된 구면 $S^k\subset M$ 으로 실현하고 그 관다발(tubular neighborhood) $S^k\times D^{n-k}$ 를 떼어낸 뒤, 경계 $S^k\times S^{n-k-1}$ 에 $D^{k+1}\times S^{n-k-1}$ 를 붙인다. 떼어낸 쪽의 $S^k$ 가 붙인 쪽에서 $D^{k+1}$ 의 경계가 되므로 $\alpha$ 가 영이 된다. $2k\lt n$ 이면 일반 위치(general position)로 구면의 매장을 잡을 수 있어 핵을 아래 차수부터 차례로 없앨 수 있다.

$n=2k$ 인 중간 차수에서 멈춘다. $K_k(M)$ 의 원소 두 개를 대표하는 $k$ 구면은 $2k=n$ 차원에서 일반 위치로 점에서 만나고, 그 교차수가 비특이 이차형식을 만든다. 수술로 원소 하나를 없애면 짝이 되는 원소도 함께 바뀌므로 아무 원소나 고를 수 없고, 자기교차가 영이고 다른 생성원과 교차수 $1$ 인 짝을 찾아야 한다. 그런 짝으로 형식 전체를 분해할 수 있는지가 수술의 가능 여부를 정하고, 그 판정을 담은 군이 수술 장애군이다.

# 정의

## 수술

$M$ 을 닫힌 $n$ 다양체, $\varphi:S^k\times D^{n-k}\hookrightarrow M$ 을 매장이라 한다. $\varphi$ 에 따른 **수술(surgery)** 의 결과는

$$
M'=\big(M\setminus\varphi(S^k\times\mathrm{int}\thinspace D^{n-k})\big)\cup_{S^k\times S^{n-k-1}}\big(D^{k+1}\times S^{n-k-1}\big)
$$

이다. 토러스 $M=T^2$ 에서 $n=2$, $k=1$ 로 원 하나의 띠 $S^1\times D^1$ 을 떼어내면 경계가 원 두 개 $S^1\times S^0$ 이고, $D^2\times S^0$, 곧 원판 두 개를 붙이면 $M'=S^2$ 이다. 거꾸로 $S^2$ 에서 $k=0$ 으로 원판 두 개 $S^0\times D^2$ 를 떼어내고 원기둥 $D^1\times S^1$ 을 붙이면 토러스가 된다.

## 차수 1 법사상

$X$ 를 $n$ 차원 Poincaré 복합체(Poincaré complex), $\xi$ 를 $X$ 위의 안정 [벡터다발](vector-bundles.md)이라 한다. **차수 1 법사상(degree one normal map)** 은 닫힌 $n$ 다양체 $M$, 기본류를 기본류로 보내는 사상 $f:M\to X$, 안정 법다발의 다발사상 $b:\nu_M\to\xi$ 의 조 $(M,f,b)$ 다. $X$ 가 다양체이면 항등사상과 항등 다발사상 $(X,\mathrm{id},\mathrm{id})$ 가 차수 1 법사상이다.

차수 1 법사상을 정상 [코보디즘](cobordism.md)(normal cobordism)으로 나눈 집합을 **정상 불변량(normal invariant)** 의 집합 $\mathcal N(X)$ 라 한다.

## 구조 집합

$X$ 가 닫힌 $n$ 다양체일 때 **구조 집합(structure set)** $\mathcal S(X)$ 는 호모토피 동치 $h:N\to X$ 의 조를 다음 관계로 나눈 것이다. $h_1:N_1\to X$ 와 $h_2:N_2\to X$ 가 같은 류에 있다는 것은 $N_1$ 과 $N_2$ 사이에 $h$ 들과 호모토피로 맞물리는 미분동형이 있다는 뜻이다. 항등사상 $\mathrm{id}:X\to X$ 의 류가 $\mathcal S(X)$ 의 기준점이고, $\mathcal S(X)$ 가 한 점이면 $X$ 와 호모토피 동치인 다양체가 $X$ 뿐이다.

## 수술 장애군

$\pi=\pi_1(X)$ 라 한다. **Wall 군(Wall group)** $L_n(\mathbb Z\pi)$ 는 짝수 $n=2k$ 에서 $\mathbb Z\pi$ 위의 비특이 $(-1)^k$ 대칭 [이차형식](quadratic-forms.md)을 쌍곡형식(hyperbolic form)의 직합으로 나눈 Grothendieck 군이고, 홀수 $n$ 에서는 쌍곡형식의 자기동형군을 기본 자기동형으로 나눈 군이다[^1].

쌍곡형식은 기저 $e,f$ 에서 $e\cdot e=f\cdot f=0$, $e\cdot f=1$ 인 형식이다. 토러스의 $H_1$ 에서 경선과 위선이 이 꼴이고, 직관 절의 짝 찾기는 형식을 쌍곡형식의 직합으로 쓰는 것이다.

# 성질

## Wall 의 장애 정리

$n\ge5$ 이고 $(M,f,b)$ 가 차수 1 법사상이면 장애 $\sigma(f,b)\in L_n(\mathbb Z\pi)$ 가 정의된다. $\sigma(f,b)=0$ 일 필요충분조건은 $(M,f,b)$ 가 $f$ 가 호모토피 동치인 차수 1 법사상과 정상 코보디즘인 것이다(Wall)[^1].

$\sigma(f,b)$ 는 중간 차수 핵 $K_k(M)$ 위에서 교차수와 자기교차수로 정의한 이차형식의 류다. 직관 절의 짝 찾기가 쌍곡형식 분해이고, 그것이 가능한 것이 류의 영이다. 차원 조건 $n\ge5$ 는 짝을 찾은 뒤 교차점을 지우는 Whitney 트릭(Whitney trick)에서 온다.

## 정상 불변량의 계산

$X$ 가 매끄러운 다양체이면 $\mathcal N(X)$ 는 호모토피류의 집합 $\lbrack X,G/\mathrm{O}\rbrack$ 와 일대일 대응한다. 여기서 $G/\mathrm O$ 는 안정 구면 올다발과 안정 벡터다발을 비교하는 공간이다.

## 수술 완전열

$X$ 가 닫힌 $n$ 다양체이고 $n\ge5$ 이면 다음이 완전하다.

$$
\cdots\to L_{n+1}(\mathbb Z\pi)\to\mathcal S(X)\to\mathcal N(X)\xrightarrow{\sigma}L_n(\mathbb Z\pi)
$$

완전성의 뜻은 두 가지다. 정상 불변량이 다양체 구조에서 오는 것과 그 장애가 영인 것이 같다. 두 구조가 같은 정상 불변량을 주면 $L_{n+1}$ 의 원소가 한 구조를 다른 구조로 옮긴다. 이 열이 $\mathcal S(X)$ 의 계산을 $\mathcal N(X)$ 의 호모토피론과 $L$ 군의 대수로 나눈다.

$\mathcal S(X)$ 는 군이 아니라 집합이고 $L_{n+1}(\mathbb Z\pi)$ 가 그 위에 작용한다. 열의 완전성은 집합과 작용의 수준에서 성립한다.

## 단순연결 경우의 L 군

$\pi$ 가 자명하면 $L$ 군은 다음과 같다.

| n mod 4 | Lₙ(Z) | 불변량 |
| --- | --- | --- |
| $0$ | $\mathbb Z$ | 부호수의 $1/8$ |
| $1$ | $0$ | |
| $2$ | $\mathbb Z/2$ | Arf 불변량 |
| $3$ | $0$ | |

$n\equiv0$ 에서 $\mathbb Z$ 는 [교차형식](intersection-form.md)의 부호수가 주고, 짝 유니모듈 형식의 부호수가 $8$ 의 배수라는 사실에서 $1/8$ 이 나온다. 부호수 $8$ 인 $E_8$ 형식이 생성원 $1$ 에 대응한다. $n\equiv2$ 에서는 형식이 교대형이고 추가 자료인 자기교차수가 $\mathbb Z/2$ 값 Arf 불변량(Arf invariant)을 준다.

## 4 주기성

모든 군 $\pi$ 와 모든 $n$ 에 대해 $L_n(\mathbb Z\pi)\cong L_{n+4}(\mathbb Z\pi)$ 다.

정의의 $(-1)^k$ 대칭은 $k$ 를 $2$ 만큼 올리면 같은 부호로 돌아오고, 홀수 차수의 두 군도 같은 주기를 따른다. 그래서 $L$ 군은 네 개만 계산하면 된다.

# 활용

- 고차원 다양체의 분류. [s-코보디즘 정리](s-cobordism.md)가 호모토피 정보에서 미분동형으로 건너가는 단계를 주고, 수술 [완전열](exact-sequences.md)이 그 앞 단계인 호모토피 구조의 개수를 준다. 차원 $5$ 이상의 분류는 두 정리를 이어 쓴다.
- 구면의 매끄러운 구조. $X=S^n$ 에 수술 완전열을 적용하면 $\mathcal S(S^n)$ 가 $S^n$ 과 호모토피 동치인 매끄러운 다양체를 센다. $\mathcal N(S^n)=\pi_n(G/\mathrm O)$ 는 [J 준동형](j-homomorphism.md)을 거쳐 구면의 안정 [호모토피군](homotopy-groups.md)과 이어지고, 장애 사상은 Kervaire 불변량과 부호수다. 그 계산의 결과가 [이색 구면](exotic-spheres.md)의 개수다.
- 위상 강직성(topological rigidity). 비구면(aspherical) 다양체에서 위상 범주의 $\mathcal S(X)$ 가 한 점인지 묻는 것이 [Borel 추측](borel-conjecture.md)이다. $L$ 군과 정상 불변량을 군의 호몰로지로 계산하는 조립 사상(assembly map)이 그 물음을 군론 문제로 바꾼다.
- 군환의 이차형식. $L_n(\mathbb Z\pi)$ 의 계산은 군환 위의 이차형식 이론이고, 유한군의 경우 표현론의 자료로 환원된다.

[^1]: C. T. C. Wall, *Surgery on Compact Manifolds*, Academic Press (1970). 제 5 장이 장애 정리, 제 9 장이 수술 완전열이다.

# 연관 문서

## 선수지식

- [Poincaré 쌍대성](poincare-duality.md)
- [s-코보디즘 정리와 고차원 Poincaré 추측](s-cobordism.md)

## 더 알아보기

- [이색 구면](exotic-spheres.md)

#algebraic_topology #topology #algebra
