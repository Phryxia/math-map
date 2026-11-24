# 단체 근사 정리

# 개요

**단체 근사 정리(simplicial approximation theorem)** 는 단체복합체 사이의 연속사상을, 정의역을 충분히 잘게 나눈 뒤 꼭짓점을 꼭짓점으로 보내고 단체 위에서 일차식인 사상으로 바꿀 수 있다는 정리다. 원을 자기 자신으로 두 번 감는 사상은 꼭짓점 셋짜리 삼각형 테두리 위에서는 꼭짓점을 꼭짓점으로 보내는 사상으로 적히지 않는다. 이 정리는 정의역을 세분해 그런 사상을 만들고, 그 사상이 원래 사상과 호모토픽함을 보여, 연속사상에 대한 물음을 유한한 조합 자료의 계산으로 바꾼다.

# 직관

원을 꼭짓점 $0,1,2$ 와 변 $\lbrack 0,1\rbrack$, $\lbrack 1,2\rbrack$, $\lbrack 2,0\rbrack$ 으로 된 삼각형 테두리 $K$ 로 본다. 사상 $f$ 는 각도 $\theta$ 의 점을 각도 $2\theta$ 의 점으로 보내 원을 두 번 감는다. 꼭짓점을 꼭짓점으로 보내고 변을 변이나 꼭짓점으로 보내는 사상은 변 세 개를 따라 한 바퀴 도는 동안 삼각형을 많아야 한 번 감으므로, 두 번 감는 $f$ 를 흉내 낼 수 없다.

정의역의 변을 반으로 나눠 꼭짓점 여섯 개 $0,1,\dots,5$ 를 $60^\circ$ 간격으로 둔 육각형으로 바꾼다. 꼭짓점 $k$ 는 $f$ 로 각도 $120^\circ k$ 의 점, 곧 삼각형의 꼭짓점 $k\bmod 3$ 으로 간다. 그래서 꼭짓점 $k$ 를 $k\bmod 3$ 으로 보내고 변을 일차식으로 보내면, 육각형의 변 여섯 개가 삼각형의 변 $\lbrack 0,1\rbrack$, $\lbrack 1,2\rbrack$, $\lbrack 2,0\rbrack$ 을 이 순서로 두 번 지나서 두 번 감는다.

이 사상과 $f$ 는 각 점을 삼각형의 같은 변 위의 점으로 보낸다. 두 상을 잇는 선분을 따라 $f$ 를 이 사상으로 옮기면 $f$ 와 호모토픽하다. 감는 횟수 $2$ 는 이 사상에서 변 $\lbrack 0,1\rbrack$ 위로 가는 육각형의 변이 둘이라는 셈으로 읽힌다.

# 정의

## 단체 사상

[단체 호몰로지](homology.md)의 단체복합체 $K$, $L$ 에서 꼭짓점 사이의 함수 $\varphi\colon V(K)\to V(L)$ 이 $K$ 의 각 단체의 꼭짓점들을 $L$ 의 한 단체의 꼭짓점들로 보내면 **단체 사상(simplicial map)** 이라 한다. 단체 위의 점 $\sum t_iv_i$ 를 $\sum t_i\varphi(v_i)$ 로 보내면 다면체 사이의 연속사상 $\vert\varphi\vert\colon\vert K\vert\to\vert L\vert$ 이 된다. 직관 절의 $k\mapsto k\bmod 3$ 은 육각형에서 삼각형으로 가는 단체 사상이다.

## 열린 별

꼭짓점 $v$ 의 **열린 별(open star)** $\mathrm{st}(v)$ 는 $v$ 를 꼭짓점으로 갖는 단체들의 내부의 합집합이다. $\mathrm{st}(v)$ 는 $\vert K\vert$ 의 열린 집합이고, 꼭짓점 $v_0,\dots,v_k$ 의 열린 별들이 공통점을 갖는 것은 $v_0,\dots,v_k$ 가 한 단체를 이루는 것과 동치다. 삼각형 테두리에서 $\mathrm{st}(0)$ 은 꼭짓점 $0$ 과 그에 붙은 두 변의 내부로 된 열린 호다.

## 단체 근사

연속사상 $f\colon\vert K\vert\to\vert L\vert$ 의 **단체 근사(simplicial approximation)** 는 $K$ 의 모든 꼭짓점 $v$ 에 대해 다음을 만족하는 단체 사상 $\varphi\colon K\to L$ 이다.

$$
f(\mathrm{st}(v))\subseteq\mathrm{st}(\varphi(v))
$$

직관 절에서 육각형의 꼭짓점 $k$ 의 열린 별은 각도 $60^\circ(k-1)$ 과 $60^\circ(k+1)$ 사이의 열린 호이고, $f$ 는 이것을 각도 $120^\circ(k-1)$ 과 $120^\circ(k+1)$ 사이의 열린 호, 곧 삼각형 꼭짓점 $k\bmod 3$ 의 열린 별로 보낸다. 그러므로 $k\mapsto k\bmod 3$ 은 $f$ 의 단체 근사다.

## 무게중심 세분

$K$ 의 **무게중심 세분(barycentric subdivision)** $\mathrm{sd}\thinspace K$ 는 $K$ 의 단체들의 무게중심을 꼭짓점으로 하고, 사슬 $\sigma_0\subsetneq\sigma_1\subsetneq\cdots\subsetneq\sigma_k$ 의 무게중심들을 단체로 하는 단체복합체다. $\vert\mathrm{sd}\thinspace K\vert=\vert K\vert$ 이다. $\mathrm{sd}^NK$ 는 세분을 $N$ 번 한 것이다. 직관 절의 육각형은 삼각형 테두리의 무게중심 세분이다.

# 성질

## 세분의 크기

$\sigma$ 가 지름 $\delta$ 인 $n$-단체이면 $\mathrm{sd}\thinspace\sigma$ 의 단체의 지름은 $\frac{n}{n+1}\delta$ 이하다. 단체들의 지름의 최댓값을 $K$ 의 **눈(mesh)** 이라 하면, $\dim K=n$ 일 때 $\mathrm{sd}^NK$ 의 눈은 $\bigl(\frac{n}{n+1}\bigr)^N$ 배 이하로 줄어 $0$ 으로 간다.

증명의 요지. 단체의 지름은 두 꼭짓점 사이의 거리로 정해지므로, $\mathrm{sd}\thinspace\sigma$ 의 단체의 지름은 두 무게중심 $b(\tau)$, $b(\tau')$ 사이의 거리이고 $\tau\subseteq\tau'$ 이다. $b(\tau)$ 는 $\tau'$ 의 점이고, $b(\tau')$ 에서 $\tau'$ 의 점까지의 거리는 꼭짓점 $w$ 까지의 거리로 최대가 된다. 그 거리는 $w$ 와 반대쪽 면의 무게중심 사이 거리의 $\frac{m}{m+1}$ 배이므로 $\frac{m}{m+1}\delta$ 이하이고, $m=\dim\tau'\le n$ 이다.

## 정리의 진술

$K$ 가 유한 단체복합체이고 $f\colon\vert K\vert\to\vert L\vert$ 이 연속이면, 어떤 $N$ 에 대해 $f$ 의 단체 근사 $\varphi\colon\mathrm{sd}^NK\to L$ 이 존재한다[^1].

증명의 요지. 열린 덮개 $\lbrace f^{-1}(\mathrm{st}(w))\rbrace\_{w\in V(L)}$ 은 콤팩트 거리 공간 $\vert K\vert$ 를 덮으므로 Lebesgue 수(Lebesgue number) $\lambda\gt 0$ 이 있다. 곧 지름이 $\lambda$ 보다 작은 집합은 덮개의 한 집합에 들어 있다. 세분의 크기에 따라 $\mathrm{sd}^NK$ 의 눈이 $\lambda/2$ 보다 작은 $N$ 을 잡으면, 각 꼭짓점 $v$ 의 열린 별의 지름이 $\lambda$ 보다 작아 어떤 $w$ 에 대해 $\mathrm{st}(v)\subseteq f^{-1}(\mathrm{st}(w))$ 다. $\varphi(v)=w$ 로 둔다.

$v_0,\dots,v_k$ 가 한 단체를 이루면 열린 별들이 공통점 $x$ 를 가지므로 $f(x)$ 가 $\mathrm{st}(\varphi(v_i))$ 모두에 들고, $\varphi(v_i)$ 들은 $L$ 의 한 단체를 이룬다. 그러므로 $\varphi$ 는 단체 사상이다.

## 근사와 원래 사상의 호모토피

$\varphi$ 가 $f$ 의 단체 근사이면 모든 $x$ 에 대해 $\vert\varphi\vert(x)$ 는 $f(x)$ 를 내부에 갖는 $L$ 의 단체 안에 있다. 그러므로 다음 식이 $\vert L\vert$ 안의 호모토피를 정한다.

$$
H(x,t)=(1-t)\thinspace f(x)+t\thinspace\vert\varphi\vert(x)
$$

$f$ 와 $\vert\varphi\vert$ 는 호모토픽하다. 직관 절의 선분을 따라 옮긴 호모토피가 이것이다.

# 활용

- 호몰로지의 위상 불변성. 연속사상 $f$ 에 단체 근사의 사슬 사상이 유도하는 준동형을 대응시키면, 근사의 선택과 세분에 무관한 준동형 $f_\ast$ 가 정해진다. 이로써 [단체 호몰로지](homology.md)가 삼각화의 선택에 무관하고 호모토피 불변임이 증명된다.
- 구면의 호모토피군. $k\lt n$ 이면 연속사상 $S^k\to S^n$ 은 단체 근사와 호모토픽하고, 그 상은 $k$ 차원 이하의 단체들에 들어 있어 $S^n$ 의 한 점을 지나지 않는다. 한 점을 뺀 $S^n$ 은 $\mathbb R^n$ 과 위상동형이라 축약 가능하므로 사상은 상수사상과 호모토픽하고 $\pi_k(S^n)=0$ 이다([호모토피군](homotopy-groups.md)).
- 차수. 같은 차원의 유향 다양체 사이의 사상의 [Brouwer 차수](brouwer-degree.md)는 단체 근사에서 한 최고차 단체 위로 가는 단체를 방향의 부호를 붙여 센 값이다. 직관 절에서 변 $\lbrack 0,1\rbrack$ 위로 가는 육각형의 변이 같은 방향으로 둘이므로 차수가 $2$ 다.
- 고정점 정리. [Lefschetz 고정점 정리](lefschetz-fixed-point.md)의 증명은 고정점이 없는 사상의 단체 근사를 잡고, 근사가 어느 단체도 자기 자신 안으로 보내지 않게 세분한 뒤 사슬 수준의 대각합이 $0$ 임을 보인다.

[^1]: J. R. Munkres, *Elements of Algebraic Topology*, Addison-Wesley, 1984, 14–16 절.

# 연관 문서

## 선수지식

- [단체 호몰로지](homology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #theorem
