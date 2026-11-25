# Kummer 곡면

# 개요

**Kummer 곡면(Kummer surface)** 은 $2$ 차원 아벨 다양체의 점 $x$ 와 $-x$ 를 같은 점으로 묶어 얻는 곡면이다. 도넛 모양 곡면 둘을 곱한 공간에서 $x$ 와 $-x$ 를 붙이면 자기 자신과 붙는 점이 $16$ 개 생기고, 그 점들에서 곡면이 원뿔처럼 뾰족해진다.

종수 $2$ 곡선의 [Jacobi 다양체](jacobian-variety.md)에서 이렇게 만든 곡면은 $3$ 차원 사영공간 안의 사차곡면이 되므로, 아벨 다양체를 방정식 하나로 적힌 곡면으로 다룰 수 있다.

# 직관

차원 $1$ 에서 먼저 본다. [타원곡선](elliptic-curves.md) $E:y^2=x^3-x$ 에서 점 $(x,y)$ 의 역원은 $(x,-y)$ 이므로, $P$ 와 $-P$ 를 묶는 것은 $x$ 좌표만 남기는 것이다. $x$ 좌표는 사영직선의 점이고, 자기 자신과 묶이는 점은 $y=0$ 인 세 점과 무한원점, 곧 $x=0,1,-1,\infty$ 의 네 점이다. 묶은 결과는 매끄러운 사영직선이다.

차원 $2$ 에서 $A=E\times E$ 를 같은 방식으로 묶는다. 자기 자신과 묶이는 점은 $2P=0$ 인 점이고, 각 성분에서 넷씩이므로 $4\times 4=16$ 개다.

그 가운데 한 점 근처에서 국소 좌표 $(s,t)$ 를 잡으면 $(s,t)$ 와 $(-s,-t)$ 가 묶이고, 묶음에서 변하지 않는 함수는 $u=s^2$, $v=st$, $w=t^2$ 이다. 이 셋은 $uw=v^2$ 를 만족하므로 그 점 근처의 몫은 원뿔이다. 차원 $1$ 과 달리 뾰족한 점이 $16$ 개 남는다.

# 정의

$A$ 를 $2$ 차원 복소 [아벨 다양체](abelian-varieties.md), $\iota:A\to A$ 를 $\iota(x)=-x$ 라 한다. 몫 $A/\iota$ 를 $A$ 의 **Kummer 곡면** 이라 하고 $\mathrm{Km}(A)$ 로 적는다.

$\iota$ 의 고정점은 $2$ 등분점 $A\lbrack 2\rbrack$ 이다. $A\cong\mathbb C^2/\Lambda$ 이면 $A\lbrack 2\rbrack\cong\tfrac12\Lambda/\Lambda\cong(\mathbb Z/2)^4$ 이므로 고정점은 $16$ 개다. 각 고정점의 상은 $\mathrm{Km}(A)$ 의 **보통 이중점(ordinary double point)**, 곧 국소적으로 원뿔 $uw=v^2$ 와 같은 특이점이다. 직관 절의 $E\times E$ 가 그 예다.

$\mathrm{Km}(A)$ 의 $16$ 개 이중점을 각각 부풀린(blow up) 매끄러운 곡면을 $\widetilde{\mathrm{Km}}(A)$ 로 적는다. 부풀림은 각 이중점을 사영직선 하나로 바꾼다.

# 성질

## 사차곡면

$A$ 가 종수 $2$ 곡선 $C$ 의 Jacobi 다양체이고 $\Theta$ 가 대칭인 theta divisor 이면, 선형계 $\vert 2\Theta\vert$ 는 $\mathbb P^3$ 으로 가는 사상을 주고 이 사상은 $\iota$ 로 묶인 두 점을 같은 점으로 보낸다. 상은 $\mathrm{Km}(A)$ 와 같고, $\mathbb P^3$ 안에서 이중점 $16$ 개를 갖는 사차곡면이다.

차수는 교차수로 확인한다. 주편극의 자기교차수가 $\Theta^2=2$ 이므로 $(2\Theta)^2=8$ 이고, 사상이 $2$ 대 $1$ 이므로 상의 차수는 $8/2=4$ 다.

## 16₆ 배치

$2$ 등분점 $a$ 마다 평행이동 $\Theta+a$ 의 상은 $\mathbb P^3$ 의 평면 하나에 놓인 원뿔곡선이고, 사차곡면은 그 원뿔곡선을 따라 평면에 접한다. 이런 평면을 trope 라 한다. trope 는 $16$ 개다.

$\Theta$ 는 곡선 $C$ 의 상이고 그 위의 $2$ 등분점은 $C$ 의 [Weierstrass 점](weierstrass-points.md) $6$ 개다. 그러므로 trope 하나에 이중점이 $6$ 개 놓이고, 같은 대칭성으로 이중점 하나는 trope $6$ 개에 놓인다. 이 점과 평면의 배치를 Kummer 의 $16_6$ 배치(Kummer configuration)라 한다.

## K3 곡면

$\widetilde{\mathrm{Km}}(A)$ 는 [K3 곡면](k3-surfaces.md), 곧 표준다발이 자명하고 단순연결인 콤팩트 복소곡면이다.

[Euler 표수](euler-characteristic.md)로 그 값을 확인한다. $A$ 는 토러스이므로 $\chi(A)=0$ 이다. 고정점 $16$ 개를 빼면 $-16$, $\iota$ 로 묶으면 $-8$, 이중점 $16$ 개를 다시 넣으면 $8$ 이다. 각 이중점을 사영직선으로 바꾸면 하나마다 $1$ 이 늘어 $8+16=24$ 가 되고, 이것이 K3 곡면의 Euler 표수다.

Nikulin 정리(Nikulin's theorem). K3 곡면이 어떤 아벨 곡면의 Kummer 곡면일 필요충분조건은 서로 만나지 않는 매끄러운 유리곡선 $16$ 개를 포함하는 것이다[^1].

## 높은 차원의 Kummer 다양체

차원 $g$ 의 주편극 아벨 다양체에서도 $\vert 2\Theta\vert$ 가 $A/\iota$ 를 $\mathbb P^{2^g-1}$ 로 보낸다. 그 상을 Kummer 다양체(Kummer variety)라 하고, $g=2$ 이면 위의 사차곡면이다. 이 상 위의 세 점을 지나는 직선의 존재가 [Schottky 문제](schottky-problem.md)에서 Jacobi 다양체를 가르는 조건이 된다.

# 활용

- 종수 $2$ 곡선의 산술. 정수배 사상 $\lbrack n\rbrack$ 은 $\iota$ 와 교환하므로 Kummer 곡면 위의 사상으로 내려가고, 덧셈은 내려가지 않는다. 종수 $2$ 곡선 암호의 스칼라 곱을 이 곡면의 사영좌표 $4$ 개로 계산한다.
- K3 곡면의 분류. Kummer 곡면의 둘째 코호몰로지에는 부풀림이 만든 유리곡선 $16$ 개의 류가 들어 있고, Nikulin 정리는 이 류들로 Kummer 곡면을 K3 곡면 가운데서 가린다.

[^1]: V. V. Nikulin, "On Kummer Surfaces", Mathematics of the USSR-Izvestiya **9** (1975), 261–275.

# 연관 문서

## 선수지식

- [아벨 다양체](abelian-varieties.md)
- [Jacobi 다양체](jacobian-variety.md)
- [K3 곡면](k3-surfaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis #algebraic_topology
