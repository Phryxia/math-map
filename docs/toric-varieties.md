# 토릭 다양체

# 개요

**토릭 다양체(toric variety)** 는 대수적 토러스 $(k^\times)^n$ 을 조밀한 열린 부분집합으로 포함하고, 토러스의 곱셈 작용이 전체로 연장되는 [대수다양체](algebraic-varieties.md)다. 좌표환이 단항식만으로 생성되고, 쓰이는 단항식의 지수가 격자 안의 볼록 뿔을 이룬다.

그래서 토릭 다양체는 뿔과 그 뿔을 모은 부채(fan)라는 볼록 기하의 자료로 정해진다. 매끄러운지, 콤팩트인지, Euler 지표가 얼마인지 같은 다양체의 질문이 뿔과 다면체에 대한 셈으로 바뀐다.

# 직관

$k^3$ 안의 원뿔 $xy=z^2$ 을 본다. $x=s^2$, $y=t^2$, $z=st$ 로 놓으면 방정식이 성립하고, 좌표환 $k\lbrack x,y,z\rbrack/(xy-z^2)$ 은 $k\lbrack s^2,st,t^2\rbrack$ 과 같다. 이 환의 원소는 $s,t$ 의 다항식 가운데 모든 항 $s^at^b$ 에서 $a+b$ 가 짝수인 것이다.

그러면 환은 지수의 집합 $S=\lbrace(a,b):a,b\ge 0,\thinspace a+b\text{ 는 짝수}\rbrace$ 하나로 정해진다. $S$ 는 $(2,0)$, $(1,1)$, $(0,2)$ 를 더해서 전부 만들어지고, 세 생성원 사이의 관계 $(2,0)+(0,2)=(1,1)+(1,1)$ 이 곧 방정식 $xy=z^2$ 이다. 다양체의 방정식이 지수 사이의 덧셈 관계로 나온다.

$S$ 는 사분면에 놓인 격자점 가운데 $a+b$ 가 짝수인 것들이다. 거꾸로 격자와 볼록 뿔을 아무렇게나 잡아도 그 안의 격자점이 지수 집합이 되어 환 하나와 다양체 하나를 준다. $xy\ne 0$ 인 부분에서 $(s,t)$ 를 $0$ 이 아닌 수배로 바꾸면 점이 곡면 위에서 움직이므로, 다양체에 토러스 $(k^\times)^2$ 가 작용한다.

원점 $x=y=z=0$ 은 원뿔의 꼭짓점이고 특이점이다. 곡면은 $2$ 차원인데 $S$ 를 만드는 데 생성원 셋이 필요하다. 평면 $k^2$ 의 지수 집합은 사분면의 격자점 전체이고 $(1,0)$, $(0,1)$ 둘로 만들어지며, 평면에는 특이점이 없다. 생성원이 격자의 기저를 이루는지가 매끄러움을 정한다.

# 정의

## 뿔과 아핀 토릭 다양체

$N\cong\mathbb Z^n$ 을 [격자](lattices.md), $M=\mathrm{Hom}(N,\mathbb Z)$ 를 쌍대 격자라 하고 짝짓기를 $\langle u,v\rangle$ 로 쓴다. $N\_{\mathbb R}=N\otimes\mathbb R$ 이다.

$N$ 의 원소 유한 개 $v_1,\dots,v_r$ 의 음 아닌 일차결합 전체 $\sigma=\mathrm{cone}(v_1,\dots,v_r)$ 이 직선을 포함하지 않으면 $\sigma$ 를 **유리 다면 뿔(rational polyhedral cone)** 이라 한다. 쌍대 뿔은

$$
\sigma^\vee=\lbrace u\in M\_{\mathbb R}:\langle u,v\rangle\ge 0\thinspace\text{ 모든 } v\in\sigma \text{ 에 대해}\rbrace
$$

이고, $S\_\sigma=\sigma^\vee\cap M$ 은 덧셈에 닫힌 집합이다. [Gordan 보조정리](gordan-lemma.md)로 $S\_\sigma$ 는 유한 개의 원소로 생성된다[^1].

$k\lbrack S\_\sigma\rbrack$ 를 $u\in S\_\sigma$ 마다 기저 원소 $\chi^u$ 를 두고 곱을 $\chi^u\chi^{u'}=\chi^{u+u'}$ 로 정한 환이라 한다. 좌표환이 $k\lbrack S\_\sigma\rbrack$ 인 아핀 대수다양체 $U\_\sigma$ 를 **아핀 토릭 다양체** 라 한다. 생성원 $\chi^{u_1},\dots,\chi^{u_m}$ 이 $U\_\sigma$ 를 $k^m$ 안에 넣고, $u_i$ 사이의 덧셈 관계가 방정식이 된다.

직관 절의 원뿔은 $N=\mathbb Z^2$ 에서 $\sigma=\mathrm{cone}((0,1),(2,-1))$ 로 얻는다. $\sigma^\vee=\lbrace(a,b):0\le b\le 2a\rbrace$ 이고 $S\_\sigma$ 의 생성원은 $(1,0)$, $(1,1)$, $(1,2)$ 이며, 관계 $(1,0)+(1,2)=2(1,1)$ 이 $xy=z^2$ 이다.

## 부채와 토릭 다양체

$N\_{\mathbb R}$ 의 유리 다면 뿔들의 유한 모임 $\Sigma$ 가 다음을 만족하면 **부채(fan)** 라 한다.

- $\sigma\in\Sigma$ 의 면은 모두 $\Sigma$ 에 속한다.
- $\sigma,\tau\in\Sigma$ 이면 $\sigma\cap\tau$ 는 $\sigma$ 의 면이면서 $\tau$ 의 면이다.

$\tau$ 가 $\sigma$ 의 면이면 $U\_\tau$ 는 $U\_\sigma$ 의 열린 부분집합이다. $U\_\sigma$ 들을 $U\_{\sigma\cap\tau}$ 를 따라 붙인 다양체를 $X\_\Sigma$ 라 쓰고 **토릭 다양체** 라 한다. 뿔 $\lbrace 0\rbrace$ 에 대응하는 $U\_{\lbrace 0\rbrace}=(k^\times)^n$ 이 모든 조각에 공통인 토러스 $T\_N$ 이다.

$N=\mathbb Z^2$ 에서 반직선 $e_1$, $e_2$, $-e_1-e_2$ 와 그 가운데 둘씩이 만드는 $2$ 차원 뿔 셋을 모은 부채는 사영평면 $\mathbb P^2$ 를 준다. $2$ 차원 뿔 하나마다 $U\_\sigma\cong k^2$ 이고, 이것이 $\mathbb P^2$ 의 표준 아핀 조각 셋이다.

# 성질

## 궤도와 뿔의 대응

$T\_N$ 의 궤도와 $\Sigma$ 의 뿔은 일대일로 대응한다. 뿔 $\sigma$ 의 궤도 $O(\sigma)$ 는 $(k^\times)^{n-\dim\sigma}$ 와 동형이고, $\tau$ 가 $\sigma$ 의 면인 것과 $O(\sigma)$ 가 $O(\tau)$ 의 폐포에 들어 있는 것이 동치다[^1]. $\mathbb P^2$ 에서는 열린 궤도 하나, 반직선 셋에 대응하는 좌표축 셋(고정점을 뺀 것), $2$ 차원 뿔 셋에 대응하는 고정점 $(1:0:0)$, $(0:1:0)$, $(0:0:1)$ 이다.

## 매끄러움과 완비성

- $X\_\Sigma$ 가 매끄러운 것과 $\Sigma$ 의 모든 뿔이 $N$ 의 어떤 기저의 일부로 생성되는 것은 동치다.
- $X\_\Sigma$ 가 완비인 것과 $\Sigma$ 의 뿔들의 합집합이 $N\_{\mathbb R}$ 전체인 것은 동치다. $k=\mathbb C$ 에서 완비는 콤팩트와 같다.

## Euler 지표

**정리.** $k=\mathbb C$ 이고 $X\_\Sigma$ 가 완비이면 [Euler 지표](euler-characteristic.md)는 $\Sigma$ 의 $n$ 차원 뿔의 개수다.

증명의 요지. $X\_\Sigma$ 는 궤도 $O(\sigma)\cong(\mathbb C^\times)^{n-\dim\sigma}$ 의 서로소 합집합이다. $m\ge 1$ 이면 $(\mathbb C^\times)^m$ 은 원 $S^1$ 이 작용하는 공간이고 고정점이 없으므로 Euler 지표가 $0$ 이다. 남는 것은 $n$ 차원 뿔의 궤도인 점들이고, 하나가 $1$ 씩 더한다. $\mathbb P^2$ 의 Euler 지표는 $3$ 이다.

## 다면체와 사영 토릭 다양체

$P\subset M\_{\mathbb R}$ 를 꼭짓점이 $M$ 에 있는 $n$ 차원 볼록 다면체라 하고, $P$ 의 격자점을 $u_0,\dots,u_m$ 이라 한다. 토러스에서 사영공간으로 가는 사상

$$
T\_N\to\mathbb P^m,\qquad t\mapsto(\chi^{u_0}(t):\cdots:\chi^{u_m}(t))
$$

의 상의 폐포를 $X\_P$ 라 한다. $P$ 의 면 $F$ 마다 $P$ 위에서 $\langle\cdot,v\rangle$ 의 최솟값을 $F$ 에서 갖는 $v\in N\_{\mathbb R}$ 를 모으면 뿔이 되고, 이 뿔들이 이루는 부채를 $P$ 의 **법부채(normal fan)** 라 한다. $P$ 가 정규 다면체(normal polytope)이면 $X\_P$ 는 법부채의 토릭 다양체와 같은 [사영다양체](projective-varieties.md)이고 다음이 성립한다[^1].

- $X\_P$ 의 동차좌표환의 $d$ 차 성분의 차원은 $dP$ 의 격자점 개수다. 이 개수는 $d$ 의 다항식이고 [Ehrhart 다항식](ehrhart-polynomial.md)이다.
- $X\_P$ 의 차수는 $n!\thinspace\mathrm{vol}(P)$ 다.

$P$ 가 꼭짓점 $(0,0)$, $(1,0)$, $(0,1)$ 인 삼각형이면 $X\_P=\mathbb P^2$ 이고, $dP$ 의 격자점은 $(d+1)(d+2)/2$ 개로 세 변수 $d$ 차 단항식의 개수와 같다. $P=\lbrack 0,1\rbrack^2$ 이면 사상이 $(s,t)\mapsto(1:s:t:st)$ 이고 상의 폐포는 $\mathbb P^3$ 안의 이차곡면 $x_0x_3=x_1x_2$ 다. 이 곡면은 $\mathbb P^1\times\mathbb P^1$ 이고 차수 $2=2!\cdot 1$ 이다.

## 모멘트 다면체

$k=\mathbb C$ 이고 $X\_P$ 가 매끄러우면 $X\_P$ 에는 콤팩트 토러스 $T^n=(S^1)^n$ 이 심플렉틱 형식을 보존하며 작용하고, 그 [모멘트 사상](moment-map.md)의 상은 평행이동을 빼고 $P$ 다. 거꾸로 Delzant 정리(Delzant's theorem)에 따르면 $2n$ 차원 콤팩트 연결 심플렉틱 다양체에 $T^n$ 이 충실하게 Hamilton 작용하면 그 다양체는 모멘트 다면체로 결정되고, 그 다면체의 토릭 다양체와 동형이다[^2]. 이때 나오는 다면체는 꼭짓점마다 모서리가 정확히 $n$ 개이고 그 방향 벡터들이 $M$ 의 기저를 이루는 것들이다.

# 활용

- **격자점 세기.** 다면체의 격자점 개수가 토릭 다양체 위 단면 공간의 차원이므로, [Ehrhart 다항식](ehrhart-polynomial.md)의 성질과 [Barvinok 알고리즘](barvinok-algorithm.md)의 분해가 토릭 다양체의 코호몰로지 계산과 대응한다.
- **단순 다면체의 면 개수.** Stanley 는 유리 단순 다면체의 토릭 다양체에 강한 Lefschetz 정리(hard Lefschetz theorem)를 써서, 면의 개수가 McMullen 의 조건을 만족해야 함을 증명했다[^3].
- **몫으로서의 토릭 다양체.** 반직선이 $r$ 개인 부채의 토릭 다양체는 $k^r$ 의 열린 부분집합을 대수적 토러스의 작용으로 나눈 몫으로 쓰인다(Cox 구성, Cox construction)[^4]. 이 몫이 [기하 불변량 이론](geometric-invariant-theory.md)의 몫이고, 선형화를 바꾸면 부채가 바뀐다.
- **대수기하의 시험 사례.** 교차수, 코호몰로지, 특이점 해소 같은 일반 이론의 진술을 부채의 조합론으로 직접 계산할 수 있어 예와 반례를 만드는 데 쓴다.

[^1]: W. Fulton, *Introduction to Toric Varieties*, Annals of Mathematics Studies 131, Princeton University Press, 1993, 1 장과 3 장. Gordan 보조정리, 궤도와 뿔의 대응, 매끄러움과 완비성의 판정, 다면체의 토릭 다양체.
[^2]: T. Delzant, "Hamiltoniens périodiques et images convexes de l'application moment", *Bulletin de la Société Mathématique de France* 116 (1988), 315–339.
[^3]: R. P. Stanley, "The number of faces of a simplicial convex polytope", *Advances in Mathematics* 35 (1980), 236–238.
[^4]: D. A. Cox, "The homogeneous coordinate ring of a toric variety", *Journal of Algebraic Geometry* 4 (1995), 17–50.

# 연관 문서

## 선수지식

- [사영다양체](projective-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #differential_geometry #combinatorics
