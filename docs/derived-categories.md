# 유도 범주

# 개요

**유도 범주(derived category)** 는 [사슬 복합체](chain-complexes.md)를 대상으로 하고 호몰로지 동형을 사상의 동형으로 만든 범주다. $\mathbb Z/2$ 를 $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to 0$ 으로 분해하면 두 복합체 사이에 호몰로지를 모두 같게 하는 사상이 있지만, 그 사상은 역사상이 없어 사슬 복합체의 범주에서는 두 대상이 같지 않다. 유도 범주는 이런 사상의 역을 더해 가군과 그 분해를 같은 대상으로 다룬다.

# 직관

$\mathbb Z$ 가군의 사슬 복합체 둘을 견준다. 하나는 차수 $1$ 과 $0$ 에 $\mathbb Z$ 가 놓이고 경계 사상이 $2$ 배인 $P\_\bullet$ 이고, 다른 하나는 차수 $0$ 에만 $\mathbb Z/2$ 가 놓인 $M\_\bullet$ 이다.

$P\_\bullet\to M\_\bullet$ 인 사슬 사상 $f$ 를 차수 $0$ 에서 사영 $\mathbb Z\to\mathbb Z/2$ 로, 차수 $1$ 에서 $0$ 으로 정한다. $2$ 배 사상의 상이 $2\mathbb Z$ 이고 사영이 그것을 $0$ 으로 보내므로 가환이다. 호몰로지는 $H_0(P\_\bullet)=\mathbb Z/2\mathbb Z=\mathbb Z/2$, $H_1(P\_\bullet)=\ker(2)=0$ 이고 $H_0(M\_\bullet)=\mathbb Z/2$ 이므로 $f$ 는 모든 차수에서 호몰로지 동형을 준다.

반대 방향 사슬 사상 $g:M\_\bullet\to P\_\bullet$ 를 찾는다. 차수 $0$ 에서 필요한 것은 군 준동형 $\mathbb Z/2\to\mathbb Z$ 이고, $\mathbb Z$ 에 위수 $2$ 의 원소가 없으므로 그것은 $0$ 사상뿐이다. 그래서 $H_0(g)=0$ 이고 $H_0(f)$ 의 역이 아니다. 호몰로지에서는 동형인데 사슬 사상으로는 역이 없다.

역이 없으니 역을 더한다. 먼저 사슬 호모토픽한 두 사상을 같은 사상으로 보고, 그 다음 모든 차수에서 호몰로지 동형을 주는 사상마다 형식적인 역을 더한다. 그러면 $f$ 가 동형이 되고 $P\_\bullet$ 과 $M\_\bullet$ 이 같은 대상이 된다.

[아벨 범주](abelian-categories.md) $\mathcal A$ 의 사슬 복합체로 이렇게 얻은 범주를 $\mathcal A$ 의 유도 범주라 한다. 여기서는 $\mathcal A$ 가 $\mathbb Z$ 가군의 범주다. $P\_\bullet$ 은 $\mathbb Z/2$ 의 사영 분해(projective resolution)이므로, 유도 범주에서 가군과 그 분해는 같은 대상이다.

# 정의

## 준동형

사슬 사상 $f:X\_\bullet\to Y\_\bullet$ 가 모든 $n$ 에서 $H_n(f)$ 를 동형으로 만들면 **준동형(quasi-isomorphism)** 이라 한다. 직관 절의 $f:P\_\bullet\to M\_\bullet$ 은 준동형이다.

## 호모토피 범주

아벨 범주 $\mathcal A$ 의 **호모토피 범주(homotopy category)** $K(\mathcal A)$ 는 대상이 $\mathcal A$ 의 사슬 복합체이고, $X\_\bullet$ 에서 $Y\_\bullet$ 로 가는 사상이 사슬 사상의 사슬 호모토피류인 범주다.

차수 $1$ 과 $0$ 에 $\mathbb Z$ 가 놓이고 경계 사상이 항등인 복합체 $E\_\bullet$ 에서, $h_0=\mathrm{id}:E_0\to E_1$ 로 두면 $\mathrm{id}=dh+hd$ 이므로 항등사상이 $0$ 과 호모토픽하다. 그래서 $K(\mathcal A)$ 에서 $E\_\bullet$ 은 영대상과 동형이다.

## 유도 범주

**유도 범주** $D(\mathcal A)$ 는 $K(\mathcal A)$ 를 준동형의 모임에 대해 국소화(localization)한 범주다. 대상은 $K(\mathcal A)$ 의 대상과 같고, $X\_\bullet$ 에서 $Y\_\bullet$ 로 가는 사상은 **지붕(roof)**

$$X\_\bullet\xleftarrow{\thinspace s\thinspace}Z\_\bullet\xrightarrow{\thinspace t\thinspace}Y\_\bullet$$

의 동치류다. 여기서 $s$ 는 준동형이고, 두 지붕은 공통의 세 번째 지붕으로 덮이면 같다고 본다.

직관 절의 $f$ 의 역은 지붕 $M\_\bullet\xleftarrow{\thinspace f\thinspace}P\_\bullet\xrightarrow{\thinspace \mathrm{id}\thinspace}P\_\bullet$ 이다.

## 유계 유도 범주

$H_n(X\_\bullet)$ 이 유한 개의 $n$ 에서만 $0$ 이 아닌 대상만 모은 부분범주를 **유계 유도 범주(bounded derived category)** $D^b(\mathcal A)$ 라 한다. 충분히 큰 $n$ 에서 $0$ 인 것만 모으면 $D^-(\mathcal A)$, 충분히 작은 $n$ 에서 $0$ 인 것만 모으면 $D^+(\mathcal A)$ 다. 직관 절의 $P\_\bullet$ 과 $M\_\bullet$ 은 $D^b(\mathcal A)$ 의 대상이다.

## 이동

$X\_\bullet\lbrack k\rbrack$ 은 $(X\_\bullet\lbrack k\rbrack)\_n=X_{n-k}$ 이고 경계 사상이 $(-1)^k d$ 인 복합체다. $X\_\bullet\mapsto X\_\bullet\lbrack 1\rbrack$ 을 **이동(shift)** 이라 한다. $M\_\bullet\lbrack 1\rbrack$ 은 차수 $1$ 에만 $\mathbb Z/2$ 가 놓인 복합체다.

## 사상 고깔

사슬 사상 $f:X\_\bullet\to Y\_\bullet$ 의 **사상 고깔(mapping cone)** $C(f)$ 는 $C(f)\_n=Y_n\oplus X_{n-1}$ 에 경계 사상

$$d(y,x)=(d^Y y+(-1)^{n-1}f_{n-1}x,\thinspace d^X x)$$

를 준 복합체다. $X\_\bullet\to Y\_\bullet\to C(f)\to X\_\bullet\lbrack 1\rbrack$ 꼴의 열과 이것과 동형인 열을 **정삼각형(distinguished triangle)** 이라 한다.

직관 절의 $f:P\_\bullet\to M\_\bullet$ 에서 $C(f)\_2=P_1=\mathbb Z$, $C(f)\_1=P_0=\mathbb Z$, $C(f)\_0=\mathbb Z/2$ 이고, 경계 사상은 $2$ 배와 사영 $\mathbb Z\to\mathbb Z/2$ 다.

# 성질

## 호몰로지 함자

사슬 호모토픽한 두 사상은 같은 호몰로지 사상을 주므로 $H_n$ 이 $K(\mathcal A)$ 에서 함자로 정의된다.

## 국소화의 존재

$K(\mathcal A)$ 에서 준동형의 모임은 Ore 조건(Ore condition)을 만족하는 곱셈계(multiplicative system)이고, 그래서 $D(\mathcal A)$ 의 사상이 지붕 하나로 적힌다.

사상 고깔이 Ore 조건을 준다. $s:Z\_\bullet\to X\_\bullet$ 가 준동형이고 $u:W\_\bullet\to X\_\bullet$ 가 주어지면, $C(s)$ 의 호몰로지가 $0$ 이라는 것에서 $u$ 를 $Z\_\bullet$ 로 올리는 사상과 준동형 $W'\_\bullet\to W\_\bullet$ 를 얻는다. 지붕 둘의 합성이 다시 지붕이 되는 것도 같은 구성에서 나온다. ∎

## 삼각 구조

이동 함자와 정삼각형의 모임이 $D(\mathcal A)$ 에 삼각 범주(triangulated category)의 구조를 준다. 정삼각형 $X\_\bullet\to Y\_\bullet\to Z\_\bullet\to X\_\bullet\lbrack 1\rbrack$ 은 긴 완전열(long exact sequence)

$$\cdots\to H_n(X\_\bullet)\to H_n(Y\_\bullet)\to H_n(Z\_\bullet)\to H_{n-1}(X\_\bullet)\to\cdots$$

을 준다.

사상 고깔에서 짧은 완전열 $0\to Y_n\to C(f)\_n\to X_{n-1}\to 0$ 이 각 차수에서 분할하므로, 그 긴 완전열이 위 열이다. ∎

이 긴 완전열로부터 $f$ 가 준동형인 것과 $C(f)$ 의 호몰로지가 모두 $0$ 인 것이 동치임이 유도된다. 정의 절에서 계산한 고깔 $\mathbb Z\xrightarrow{\thinspace 2\thinspace}\mathbb Z\to\mathbb Z/2$ 는 모든 자리에서 완전하다.

## 아벨 범주와의 차이

$\mathcal A$ 가 영이 아닌 아벨 범주이면 $D(\mathcal A)$ 는 일반적으로 아벨 범주가 아니다.

$D(\mathcal A)$ 에서 사상의 핵과 여핵은 보편성질을 만족하지 않는다. 사상 고깔이 그 자리를 대신하지만 고깔은 동형까지만 정해지고 그 동형이 하나로 정해지지 않는다. 그래서 핵과 여핵이 있어야 하는 아벨 범주의 조건이 깨진다. ∎

## Ext 와의 관계

$\mathcal A$ 에 단사 대상(injective object)이 충분히 많고 $X,Y$ 가 $\mathcal A$ 의 대상이면

$$\mathrm{Hom}\_{D(\mathcal A)}(X,Y\lbrack n\rbrack)\cong\mathrm{Ext}^n(X,Y)$$

이다.

$Y$ 의 단사 분해(injective resolution) $I\_\bullet$ 를 잡으면 $Y$ 와 $I\_\bullet$ 가 $D(\mathcal A)$ 에서 동형이다. $X$ 에서 $I\_\bullet\lbrack n\rbrack$ 으로 가는 사슬 호모토피류가 $\mathrm{Ext}^n(X,Y)$ 의 정의이고, 분해로 바꾼 뒤에는 지붕을 쓰지 않아도 사상이 적힌다. ∎

## 유도 함자의 올림

아벨 범주 사이의 왼쪽 완전(left exact) 가법 함자 $F:\mathcal A\to\mathcal B$ 는 $\mathcal A$ 에 단사 대상이 충분히 많을 때 삼각 함자(triangulated functor) $RF:D^+(\mathcal A)\to D^+(\mathcal B)$ 로 올라가고, $\mathcal A$ 의 대상 $X$ 에 대해 $H^n(RF(X))=R^nF(X)$ 다.

$X$ 를 단사 분해로 바꾸고 $F$ 를 각 항에 적용한다. 분해가 유도 범주에서 $X$ 와 동형이므로 결과가 분해의 선택에 따르지 않는다. ∎

# 활용

- [유도 함자](derived-functors.md)의 정의에서 분해를 고르는 단계가 사라진다. $R^nF$ 를 각각 따로 다루는 대신 $RF$ 하나를 다루고, 합성 함자의 스펙트럼 수열이 $R(G\circ F)\cong RG\circ RF$ 에서 나온다.
- [층 코호몰로지](sheaf-cohomology.md)에서 사상 $f$ 의 밀기와 당김이 $Rf\_\ast$ 와 $f^\ast$ 로 유도 범주 사이의 함자가 되고, 두 함자의 수반이 유도 범주 수준에서 성립한다.
- [무한 범주](infinity-categories.md)의 안정 대상 이론은 삼각 범주가 잃는 정보, 곧 고깔의 선택을 포함한 구조를 다룬다.

# 연관 문서

## 선수지식

- [아벨 범주](abelian-categories.md)

## 더 알아보기

아직 연결한 문서가 없다.

#category_theory #algebra #ring_theory #algebraic_topology
