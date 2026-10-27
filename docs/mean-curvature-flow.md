# 평균곡률 흐름

# 개요

**평균곡률 흐름(mean curvature flow)** 은 곡면의 각 점을 그 점에서 휜 정도에 비례하는 속도로 움직여, 넓이가 가장 빨리 줄어들게 하는 변형이다. 닫힌 곡면이 넓이를 줄이며 움직일 때 어떤 모양을 거쳐 어떻게 사라지는지가 문제다. 구는 구 모양을 유지하며 반지름이 줄어 한 점으로 사라지지만, 가운데가 잘록한 아령 모양은 잘록한 목이 먼저 끊어질 수 있다. 평균곡률 흐름은 이 움직임을 곡면의 위치에 대한 편미분방정식으로 적어 이런 변화를 계산한다.

# 직관

평균곡률 흐름은 곡면의 각 점을 그 점의 평균곡률에 비례하는 속도로 법선 방향으로 움직이는 흐름이다. 곡면의 넓이를 가장 빠르게 줄이는 방향으로 움직이는 것이고, 움직이지 않는 곡면이 [극소곡면](minimal-surfaces.md)이다.

위치를 시간의 함수로 보면 이 흐름은 곡면 자신의 계량으로 쓴 [열방정식](heat-equation.md)이다. 볼록한 닫힌 곡면은 둥글어지며 한 점으로 줄어들고, 볼록하지 않은 곡면은 목이 끊어지는 특이점을 만들 수 있다.

닫힌 곡면을 조금씩 움직여 넓이를 줄이려 한다. 극소곡면의 일차 변분 공식에 따르면 곡면을 법선 방향으로 속도 $\varphi$ 만큼 밀 때 넓이의 변화율은 $-2\int H\varphi\thinspace dA$ 다. $\int\varphi^2\thinspace dA$ 를 고정하면 이 값을 가장 작게 하는 것은 $\varphi$ 를 $H$ 에 비례하게 고르는 것이다.

반지름 $\rho$ 인 구면에 바깥 법선을 잡으면 $H=-1/\rho$ 이다. 속도를 $\varphi=2H$ 로 고르면 모든 점이 안쪽으로 $2/\rho$ 의 속력으로 움직이므로 구면은 구면으로 남고, 반지름은 $\rho'=-2/\rho$ 를 따른다. 풀면 $\rho(t)^2=\rho\_0^2-4t$ 이고 구면은 시각 $\rho\_0^2/4$ 에 한 점으로 사라진다.

구면에서는 모든 점의 속력이 같았다. 곡면의 휘어짐이 점마다 다르면 많이 휜 곳이 빨리 움직이고, 평평한 곳은 거의 움직이지 않는다. 이렇게 넓이를 가장 빠르게 줄이는 방향으로 곡면을 계속 움직이는 것을 평균곡률 흐름이라 한다.

# 정의

$\Sigma$ 를 닫힌 곡면, $r:\Sigma\times\lbrack 0,T)\to\mathbb R^3$ 을 시각마다 매끄러운 곡면을 주는 사상이라 한다. $n$ 을 단위법벡터, $H=(k\_1+k\_2)/2$ 를 [곡률](curvature.md) 문서의 평균곡률이라 할 때

$$
\frac{\partial r}{\partial t}=2H\thinspace n
$$

을 만족하면 $r$ 을 **평균곡률 흐름** 이라 한다. 우변 $2Hn$ 은 법선의 부호를 바꿔도 변하지 않는 벡터이고 평균곡률 벡터라 부른다.

평면곡선에서는 같은 식이 $\partial\_t\gamma=\kappa N$ 이고, 이것을 **곡선 단축 흐름(curve shortening flow)** 이라 한다. $\kappa$ 는 곡률, $N$ 은 주법선이다.

## 열방정식으로 쓴 꼴

시각 $t$ 의 곡면 위 계량 $g(t)$ 의 Laplace–Beltrami 작용소를 $\Delta\_{g(t)}$ 라 하면 위치 벡터에 대해 $\Delta\_{g(t)}r=2Hn$ 이다. 따라서 평균곡률 흐름은

$$
\frac{\partial r}{\partial t}=\Delta\_{g(t)}r
$$

이고, 계량이 해에 따라 바뀌는 비선형 열방정식이다. 등온 좌표에서 이 항등식은 극소곡면 문서의 $r\_{uu}+r\_{vv}=2\lambda Hn$ 이다.

# 성질

## 넓이의 감소

$$
\frac{dA}{dt}=-4\int\_\Sigma H^2\thinspace dA
$$

이다. 일차 변분 공식에 $\varphi=2H$ 를 넣은 것이다. 넓이는 줄기만 하고, 넓이가 줄지 않는 시각에는 곡면이 극소곡면이다. $\mathbb R^3$ 에는 닫힌 극소곡면이 없으므로 닫힌 곡면은 흐름을 따라 넓이가 계속 준다.

## 비교 원리

**정리(회피 원리, avoidance principle).** 두 닫힌 곡면이 처음에 만나지 않으면 평균곡률 흐름을 따라 움직이는 동안 계속 만나지 않는다[^1].

증명의 요지. 두 곡면 사이의 거리가 처음으로 $0$ 이 되는 시각과 점을 잡으면, 그 점에서 두 곡면은 접하고 한쪽이 다른 쪽의 한편에 놓인다. 그 점에서 안쪽에 놓인 곡면이 바깥쪽 곡면보다 더 휘어 있으므로 평균곡률 벡터를 따라 더 빨리 멀어지고, 거리가 그 시각에 $0$ 으로 줄어들 수 없어 모순이 나온다. 이것은 포물형 방정식에 대한 [최대값 원리](maximum-principle.md)의 논증이다.

반지름 $R$ 인 구면 안에 놓인 닫힌 곡면은 구면 안에 머물고 구면은 시각 $R^2/4$ 에 사라지므로, 모든 닫힌 곡면의 흐름은 유한 시각 안에 특이점에 닿는다.

## 볼록 곡면의 수축

**정리(Huisken).** $n\ge 2$ 이고 $\mathbb R^{n+1}$ 의 닫힌 초곡면의 주곡률이 모두 양수이면, 평균곡률 흐름은 유한 시각에 한 점으로 줄어든다. 넓이가 일정하도록 확대하면 곡면은 구면으로 수렴한다[^2].

평면곡선에서는 볼록한 닫힌 곡선이 같은 방식으로 둥근 점으로 줄어들고(Gage–Hamilton)[^3], 자기교차가 없는 닫힌 곡선은 유한 시각 안에 볼록해진다(Grayson)[^4]. 그래서 평면에서는 자기교차가 없는 닫힌 곡선이 전부 둥근 점으로 줄어든다.

## 특이점과 자기상사해

$3$ 차원에서는 같은 결론이 성립하지 않는다. 가는 목으로 두 공을 이은 아령 모양의 곡면은 목의 둘레 방향 곡률이 커서 목이 먼저 끊어지고, 공 부분은 남는다.

모양을 유지하며 확대·축소만 되는 해를 자기상사해(self-similar solution)라 한다. 구면과 원기둥이 줄어드는 자기상사해다. 반지름 $\rho$ 인 원기둥은 $H=-1/(2\rho)$ 이므로 $\rho(t)^2=\rho\_0^2-2t$ 로 줄고, 아령의 목이 끊어지는 순간 근처를 확대하면 이 원기둥이 나타난다. Huisken 의 단조성 공식(monotonicity formula)은 특이점 근처를 확대한 극한이 자기상사해임을 보인다[^5].

# 활용

- **영상 처리.** 곡선 단축 흐름은 윤곽선의 작은 굴곡을 빨리 없애고 큰 모양은 천천히 바꾸므로 윤곽선 평활화에 쓴다. 곡선을 함수의 등위선으로 두고 그 함수를 움직이는 등위집합 방법(level set method)은 흐름 도중 위상이 바뀌어도 계산을 이어 간다[^6].
- **재료의 경계면.** 금속 결정립의 경계는 경계면 에너지가 넓이에 비례하므로 넓이를 줄이는 방향으로 움직이고, 그 운동 법칙이 평균곡률 흐름이다.
- **Ricci 흐름과의 대응.** [Ricci 흐름](ricci-flow.md)은 계량을 곡률로 움직이는 같은 꼴의 흐름이고, 특이점 근처의 확대 극한이 [Ricci 솔리톤](ricci-solitons.md)이라는 것이 평균곡률 흐름의 자기상사해에 대응한다.

[^1]: C. Mantegazza, *Lecture Notes on Mean Curvature Flow*, Progress in Mathematics 290, Birkhäuser, 2011, 2 장.
[^2]: G. Huisken, "Flow by mean curvature of convex surfaces into spheres", *Journal of Differential Geometry* 20 (1984), 237–266.
[^3]: M. Gage, R. S. Hamilton, "The heat equation shrinking convex plane curves", *Journal of Differential Geometry* 23 (1986), 69–96.
[^4]: M. A. Grayson, "The heat equation shrinks embedded plane curves to round points", *Journal of Differential Geometry* 26 (1987), 285–314.
[^5]: G. Huisken, "Asymptotic behavior for singularities of the mean curvature flow", *Journal of Differential Geometry* 31 (1990), 285–299.
[^6]: S. Osher, J. A. Sethian, "Fronts propagating with curvature-dependent speed: algorithms based on Hamilton–Jacobi formulations", *Journal of Computational Physics* 79 (1988), 12–49.

# 연관 문서

## 선수지식

- [극소곡면](minimal-surfaces.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis
