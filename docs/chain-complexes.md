# 사슬 복합체

# 개요

**사슬 복합체(chain complex)** 는 연속한 두 사상의 합성이 $0$ 인 가군의 열이다. $\mathbb Z/2$ 를 자유가군으로 덮는 열 $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to 0$ 은 각 자리에서 앞 사상의 상과 뒤 사상의 핵이 같은 완전열이지만, 일반적인 열에서는 상이 핵보다 작은 자리가 생긴다. 사슬 복합체는 그 자리마다 핵을 상으로 나눈 몫가군, 곧 호몰로지로 완전성이 깨지는 양을 잰다.

# 직관

$\mathbb Z$ 가군 $\mathbb Z/2$ 를 자유가군으로 덮으면 완전열

$$0\to\mathbb Z\xrightarrow{\thinspace 2\thinspace}\mathbb Z\to\mathbb Z/2\to 0$$

을 얻는다. 여기에 [텐서곱](tensor-products.md) 함자 $-\otimes_{\mathbb Z}\mathbb Z/2$ 를 적용하고 얻은 열이 다시 완전한지 본다.

$\mathbb Z\otimes_{\mathbb Z}\mathbb Z/2\cong\mathbb Z/2$ 이고 $2$ 배 사상은 $\mathbb Z/2$ 에서 $0$ 사상이므로 얻은 열은

$$0\to\mathbb Z/2\xrightarrow{\thinspace 0\thinspace}\mathbb Z/2\xrightarrow{\thinspace\mathrm{id}\thinspace}\mathbb Z/2\to 0$$

이다. 왼쪽 $\mathbb Z/2$ 에서 나가는 $0$ 사상의 핵은 $\mathbb Z/2$ 전체인데 들어오는 상은 $0$ 이다. 핵과 상이 다르므로 이 열은 완전하지 않다. 합성은 여전히 모든 자리에서 $0$ 이다.

핵이 상보다 큰 자리가 생겼으니 완전성을 요구하지 않고 합성이 $0$ 인 것만 요구한다. 그리고 각 자리에서 핵을 상으로 나눈 몫가군을 그 열에 딸린 값으로 삼는다.

위 열의 왼쪽 자리에서 핵은 $\mathbb Z/2$ 이고 상은 $0$ 이므로 몫은 $\mathbb Z/2$ 다. 가운데 자리에서는 핵이 $0$ 이고 상도 $0$ 이므로 몫이 $0$ 이고, 오른쪽 자리에서는 핵과 상이 모두 $\mathbb Z/2$ 이므로 몫이 $0$ 이다. 그래서 완전성이 깨진 자리와 깨진 양이 가군 하나로 적힌다.

합성이 $0$ 인 가군의 열을 사슬 복합체라 하고, 각 자리의 몫가군을 호몰로지라 한다. 위에서 남은 $\mathbb Z/2$ 는 $\mathrm{Tor}\_1^{\mathbb Z}(\mathbb Z/2,\mathbb Z/2)$ 다.

# 정의

이 절의 예는 직관 절의 열을 $C_2=C_1=C_0=\mathbb Z/2$, $d_2=0$, $d_1=\mathrm{id}$ 로 번호 붙인 복합체 $C\_\bullet$ 다. 나머지 $C_n$ 은 $0$ 이다.

## 사슬 복합체

**사슬 복합체** 는 가군의 모음 $(C_n)\_{n\in\mathbb Z}$ 와 사상 $d_n:C_n\to C_{n-1}$ 의 쌍 $(C\_\bullet,d)$ 가운데 모든 $n$ 에서 다음을 만족하는 것이다.

$$d_{n-1}\circ d_n=0$$

$d_n$ 을 **경계 사상(boundary map)** 이라 한다. 유한 개의 자리에서만 $C_n\ne 0$ 인 것을 **유계 복합체(bounded complex)** 라 한다.

위의 $C\_\bullet$ 는 $d_1\circ d_2=\mathrm{id}\circ 0=0$ 이므로 유계 사슬 복합체다. $\mathbb Z\xrightarrow{1}\mathbb Z\xrightarrow{1}\mathbb Z$ 는 합성이 $1$ 배 사상이므로 사슬 복합체가 아니다.

## 순환과 경계

$n$ 차 **순환(cycle)** 과 $n$ 차 **경계(boundary)** 는 다음 부분가군의 원소다.

$$Z_n=\ker d_n,\qquad B_n=\mathrm{Im}\thinspace d_{n+1}$$

$d_n\circ d_{n+1}=0$ 이므로 $B_n\subset Z_n$ 이다. 위의 $C\_\bullet$ 에서 $Z_2=\mathbb Z/2$, $B_2=0$ 이고, $Z_1=B_1=0$ 이고, $Z_0=B_0=\mathbb Z/2$ 다.

## 호몰로지

$n$ 차 **호몰로지(homology)** 는 다음 몫가군이다.

$$H_n(C\_\bullet)=Z_n/B_n$$

순환 $z$ 가 정하는 류를 $\lbrack z\rbrack$ 로 적는다. 위의 $C\_\bullet$ 에서는 $H_2=\mathbb Z/2$ 이고 $H_1=H_0=0$ 이다. 직관 절에서 완전성이 깨진 왼쪽 자리가 $H_2$ 다.

## 공사슬 복합체

**공사슬 복합체(cochain complex)** 는 사상의 차수가 올라가는 열, 곧 $d^n:C^n\to C^{n+1}$ 에 $d^{n+1}\circ d^n=0$ 인 것이다. 그 몫가군 $H^n=\ker d^n/\mathrm{Im}\thinspace d^{n-1}$ 을 [코호몰로지](cohomology.md)라 한다.

$C^0=C^1=\mathbb Z$, $d^0=2$ 이고 나머지가 $0$ 인 공사슬 복합체에서 $H^0=\ker 2=0$, $H^1=\mathbb Z/2\mathbb Z$ 다.

## 사슬 사상

**사슬 사상(chain map)** $f:C\_\bullet\to D\_\bullet$ 는 사상들의 모음 $f_n:C_n\to D_n$ 가운데 모든 $n$ 에서 다음을 만족하는 것이다.

$$d_n^D\circ f_n=f_{n-1}\circ d_n^C$$

$C_1=C_0=\mathbb Z$, $d_1=2$ 인 복합체에서 $D_1=D_0=\mathbb Z/2$, $d_1=0$ 인 복합체로 각 자리에서 $2$ 로 나눈 나머지를 주는 사상이 사슬 사상이다. $x\in C_1$ 에서 양변이 $0$ 과 $2x$ 의 나머지 $0$ 으로 같다.

## 사슬 호모토피

두 사슬 사상 $f,g:C\_\bullet\to D\_\bullet$ 가 **사슬 호모토픽(chain homotopic)** 하다는 것은 모든 $n$ 에서 다음을 만족하는 사상 $s_n:C_n\to D_{n+1}$ 이 있는 것이다.

$$f_n-g_n=d_{n+1}^D\circ s_n+s_{n-1}\circ d_n^C$$

$C_1=C_0=\mathbb Z$, $d_1=\mathrm{id}$ 인 복합체에서 항등사상과 $0$ 사상은 $s_0=\mathrm{id}:C_0\to C_1$ 으로 사슬 호모토픽하다. $n=0$ 에서 우변이 $d_1s_0=\mathrm{id}$ 이고, $n=1$ 에서 우변이 $s_0d_1=\mathrm{id}$ 다.

# 성질

## 완전성과 호몰로지의 소멸

**정리.** 사슬 복합체가 $n$ 자리에서 완전한 것과 $H_n(C\_\bullet)=0$ 인 것이 같다.

$H_n(C\_\bullet)=Z_n/B_n$ 이므로 $H_n(C\_\bullet)=0$ 은 $Z_n=B_n$, 곧 $\ker d_n=\mathrm{Im}\thinspace d_{n+1}$ 이다. ∎

## 호몰로지의 함자성

**정리.** 사슬 사상 $f:C\_\bullet\to D\_\bullet$ 는 각 $n$ 에서 사상 $H_n(f):H_n(C\_\bullet)\to H_n(D\_\bullet)$ 를 유도하고, 이 대응은 합성과 항등사상을 보존한다.

$z\in\ker d_n^C$ 이면 $d_n^D f_n z=f_{n-1}d_n^C z=0$ 이므로 $f_n$ 이 순환을 순환으로 보낸다. $b=d_{n+1}^C c$ 이면 $f_n b=d_{n+1}^D f_{n+1}c$ 이므로 경계를 경계로 보낸다. 그래서 $\lbrack z\rbrack\mapsto\lbrack f_n z\rbrack$ 이 몫가군 사이에서 정의된다. ∎

## 호모토피 불변성

**정리.** $f$ 와 $g$ 가 사슬 호모토픽하면 $H_n(f)=H_n(g)$ 다.

$z\in Z_n$ 이면 $d_n^C z=0$ 이므로 $f_n z-g_n z=d_{n+1}^D s_n z$ 이고 차이가 경계다. 몫가군에서 두 류가 같다. ∎

## 긴 완전열

**정리.** 사슬 복합체의 짧은 완전열 $0\to A\_\bullet\to B\_\bullet\to C\_\bullet\to 0$ 은 긴 완전열

$$\cdots\to H_n(A\_\bullet)\to H_n(B\_\bullet)\to H_n(C\_\bullet)\xrightarrow{\thinspace\partial\thinspace}H_{n-1}(A\_\bullet)\to\cdots$$

를 준다.

각 차수의 순환과 경계에 [완전열](exact-sequences.md)의 뱀 보조정리를 적용해 연결 사상 $\partial$ 를 얻는다. $c\in Z_n(C\_\bullet)$ 를 $b\in B_n$ 으로 올리면 $d_n^B b$ 의 상이 $0$ 이므로 $d_n^B b$ 가 $A_{n-1}$ 에서 오고, 그것의 류가 $\partial\lbrack c\rbrack$ 다. 올린 것을 바꾸면 차이가 경계이므로 류는 하나로 정해진다. ∎

## Euler 지표

**정리.** 유계 복합체의 각 $C_n$ 이 체 위의 유한 차원 벡터공간이면

$$\sum_n(-1)^n\dim C_n=\sum_n(-1)^n\dim H_n(C\_\bullet)$$

이고, 이 교대합이 [Euler 지표](euler-characteristic.md)다.

$\dim C_n=\dim Z_n+\dim\mathrm{Im}\thinspace d_n$ 이고 $\dim Z_n=\dim H_n(C\_\bullet)+\dim\mathrm{Im}\thinspace d_{n+1}$ 이다. 두 식을 합쳐 교대합을 취하면 $\mathrm{Im}\thinspace d_n$ 의 차원이 인접한 두 항에서 반대 부호로 나타나 지워진다. ∎

# 활용

- [유도 함자](derived-functors.md) 는 가군의 사영 분해에 함자를 적용해 얻은 사슬 복합체의 호몰로지로 $\mathrm{Tor}$ 와 $\mathrm{Ext}$ 를 정의한다.
- [단체 호몰로지](homology.md) 는 단체 복합체의 $n$ 차 단체가 생성하는 자유가군을 $C_n$ 으로, 면 사상의 교대합을 $d_n$ 으로 삼는다.
- [de Rham 코호몰로지](de-rham-cohomology.md) 는 다양체의 미분형식이 이루는 공사슬 복합체에서 외미분을 $d^n$ 으로 삼는다.
- [Koszul 복합체](koszul-complex.md) 는 환의 원소열로 만든 사슬 복합체이고, 그 호몰로지의 소멸이 그 열의 정칙성을 판정한다.
- [스펙트럼 수열](spectral-sequences.md) 은 여과를 가진 사슬 복합체의 호몰로지를 단계마다 근사해 계산한다.

# 연관 문서

## 선수지식

- [완전열](exact-sequences.md)

## 더 알아보기

- [유도 함자](derived-functors.md)
- [아벨 범주](abelian-categories.md)
- [Koszul 복합체](koszul-complex.md)

#algebra #ring_theory #category_theory #algebraic_topology
