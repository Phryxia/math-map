# 집합론적 완전교차

# 개요

대수집합 $X$ 가 집합론적 완전교차라 함은 여차원과 같은 개수의 방정식으로 $X$ 를 잘라낼 수 있다는 것이다. 방정식이 생성하는 아이디얼은 $X$ 의 아이디얼과 달라도 되고 근기만 같으면 된다.

아이디얼의 말로는 $\mathrm{ara}(I)=\mathrm{ht}\thinspace I$ 다. [국소 코호몰로지](local-cohomology.md)의 비소멸이 $\mathrm{ara}$ 의 하한을 주므로, 어떤 집합이 집합론적 완전교차가 아님을 보이는 계산은 대개 코호몰로지의 계산이다.

# 직관

$\mathbb A^n$ 의 초곡면은 방정식 하나의 영점집합이고 여차원이 $1$ 이다. $\mathbb A^2$ 의 원점은 $(x,y)$ 의 영점집합이고 여차원이 $2$ 이므로 방정식 둘로 잘리는데, 같은 원점을 $(x^2,xy,y^2)$ 의 영점집합으로 적을 수도 있다. 세 다항식의 근기가 $(x,y)$ 여서 잘라낸 집합이 같으므로, 방정식의 개수는 근기가 같은 아이디얼을 골라 세야 하고 그 최소 개수가 산술 랭크다.

$\mathbb P^3$ 에서 만나지 않는 두 직선의 합집합 $X$ 는 두 직선이 각각 차원 $1$ 이므로 여차원이 $2$ 다. $X=V(f)\cap V(g)$ 인 동차다항식 $f,g$ 가 있다고 하자. $\mathbb P^3$ 에서 초곡면 둘의 교집합은 차원이 $1$ 이상이고 그런 교집합은 연결인데, $X$ 는 만나지 않는 두 직선이어서 연결이 아니다. 그러므로 $X$ 를 방정식 둘로는 자를 수 없고, 산술 랭크가 $3$ 으로 여차원 $2$ 보다 크다.

# 정의

## 산술 랭크

$$
\mathrm{ara}(I)=\min\lbrace r:\sqrt{(a_1,\dots,a_r)}=\sqrt I\ \text{인}\ a_1,\dots,a_r\ \text{가 있다}\rbrace
$$

$V(I)$ 를 잘라내는 데 필요한 방정식의 최소 개수다. Krull 의 높이 정리로 $\mathrm{ara}(I)\ge\mathrm{ht}\thinspace I$ 다.

## 집합론적 완전교차

$$
\mathrm{ara}(I)=\mathrm{ht}\thinspace I
$$

를 만족하는 아이디얼 $I$ 를, 그리고 그 영점집합 $V(I)$ 를 **집합론적 완전교차**라 한다.

## 아이디얼론적 완전교차와의 차이

$I$ 자체가 $\mathrm{ht}\thinspace I$ 개의 원소로 생성되면 $I$ 를 **완전교차**라 한다. 완전교차는 집합론적 완전교차이고 역은 성립하지 않는다. 앞의 $(x^2,xy,y^2)$ 는 생성원이 셋 필요하지만 근기가 $(x,y)$ 이므로 그 영점집합은 집합론적 완전교차다.

# 성질

## 상한

**정리**(Eisenbud–Evans, Storch). $\mathbb A^n$ 의 모든 대수집합은 $n$ 개의 방정식으로 잘리고, $\mathbb P^n$ 의 모든 대수집합은 $n$ 개의 동차식으로 잘린다.[^1]

Kronecker 의 고전적 상한 $n+1$ 을 하나 낮춘 값이고, 여차원과는 무관하다. 여차원 $2$ 인 집합이 $\mathbb P^3$ 에서 $3$ 개로 잘린다는 앞 절의 진술이 이것이다.

## 연결성에 의한 하한

**정리**(Hartshorne). $\mathbb P^n$ 에서 $r$ 개의 동차식의 공통 영점집합이 차원 $n-r\ge1$ 을 가지면 연결이다.[^2]

연결이 아닌 집합의 산술 랭크는 이 부등식이 허용하는 값보다 커야 한다. 직관 절의 두 직선이 그 계산이다.

## 국소 코호몰로지에 의한 하한

Čech 복합체가 생성원 개수만큼 길므로 $i\gt\mathrm{ara}(I)$ 에서 $H^i\_I(R)=0$ 이다. 대우를 잡으면 $H^i\_I(R)\neq0$ 인 $i$ 마다 $\mathrm{ara}(I)\ge i$ 다.

$\mathrm{ht}\thinspace I\lt i$ 이면서 $H^i\_I(R)\neq0$ 인 $i$ 를 찾으면 집합론적 완전교차가 아니다. [Hartshorne–Lichtenbaum 소멸 정리](hartshorne-lichtenbaum.md)는 $i=\dim R$ 에서 이 비소멸을 $\dim R/I=0$ 으로 판정한다.

## 행렬식 다양체

**정리**(Bruns–Schwänzl). $m\times n$ 행렬의 $t$ 차 소행렬식이 정의하는 행렬식 다양체의 산술 랭크는 $mn-t^2+1$ 이다.[^3]

$m=2$, $n=3$, $t=2$ 인 경우가 Segre 매장 $\mathbb P^1\times\mathbb P^2\subseteq\mathbb P^5$ 다. 높이는 $(m-t+1)(n-t+1)=2$ 이고 산술 랭크는 $3$ 이므로 집합론적 완전교차가 아니다. 하한의 증명은 에탈 코호몰로지의 비소멸을 쓴다.

## 표수 $p$ 의 곡선

**정리**(Cowsik–Nori). 표수 $p\gt0$ 의 체 위에서 $\mathbb A^n$ 의 모든 곡선은 집합론적 완전교차다.[^4]

증명은 Frobenius 사상으로 아이디얼의 거듭제곱을 잡아 생성원을 여차원까지 줄인다. 표수 $0$ 에서는 이 방법이 없다. $\mathbb A^3\_{\mathbb C}$ 의 모든 기약 곡선이 집합론적 완전교차인지는 알려져 있지 않다.[^5]

# 활용

## 산술 랭크의 결정

산술 랭크를 정하는 계산은 위의 상한과 하한을 맞붙이는 형태다. 방정식 $r$ 개를 실제로 제시해 $\mathrm{ara}(I)\le r$ 을 얻고, 국소 코호몰로지나 에탈 코호몰로지의 비소멸로 $\mathrm{ara}(I)\ge r$ 을 얻는다.

## 사영 다양체의 연결성

여차원이 작은 사영 다양체가 연결이라는 진술은 연결성 정리의 대우다. 차원이 큰 두 부분다양체가 $\mathbb P^n$ 안에서 만나야 한다는 결론도 같은 부등식에서 나온다.

## 국소 코호몰로지의 계산 목표

어떤 $I$ 에서 $H^i\_I(R)$ 이 소멸하는지를 묻는 문제는 산술 랭크의 하한을 얻으려는 계산에서 나온다. Hartshorne–Lichtenbaum 소멸 정리와 표수별 확장이 그 답의 일부다.

[^1]: D. Eisenbud, E. G. Evans, *Every algebraic set in $n$-space is the intersection of $n$ hypersurfaces*, Invent. Math. **19** (1973), 107–112. 같은 해에 U. Storch, *Bemerkung zu einem Satz von M. Kneser*, Arch. Math. **23** (1972), 403–404 이 아핀 경우를 얻었다.
[^2]: R. Hartshorne, *Complete intersections and connectedness*, Amer. J. Math. **84** (1962), 497–508.
[^3]: W. Bruns, R. Schwänzl, *The number of equations defining a determinantal variety*, Bull. London Math. Soc. **22** (1990), 439–445.
[^4]: R. C. Cowsik, M. V. Nori, *Affine curves in characteristic $p$ are set theoretic complete intersections*, Invent. Math. **45** (1978), 111–114.
[^5]: G. Lyubeznik, *A survey of problems and results on the number of defining equations*, in *Commutative Algebra* (M. Hochster 외 엮음), Math. Sci. Res. Inst. Publ. **15**, Springer (1989), 375–390. 표수 $0$ 의 아핀 공간곡선 문제가 미해결로 실려 있다.

# 연관 문서

## 선수지식

- [완전교차환](complete-intersection-rings.md)
- [Hartshorne–Lichtenbaum 소멸 정리](hartshorne-lichtenbaum.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #category_theory
