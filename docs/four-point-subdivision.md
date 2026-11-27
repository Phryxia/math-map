# 4점 세분

# 개요

**4점 세분(four-point subdivision scheme)** 은 꺾은선의 점은 그대로 두고, 변마다 이웃한 네 점으로 정한 새 점을 끼워 넣는 일을 되풀이해 원래 점을 모두 지나는 매끄러운 곡선을 얻는 방법이다. [Chaikin 알고리즘](chaikin-algorithm.md)으로 정사각형을 깎으면 둥근 곡선이 나오지만, 그 곡선은 정사각형의 꼭짓점을 지나지 않는다. 손으로 찍은 점을 반드시 지나는 곡선이 필요하면 점을 옮기지 않아야 한다. 4점 세분은 새 점만 이웃 네 점을 지나는 3차 다항식의 가운데 값으로 정해, 원래 점을 지나면서 매끄러운 곡선을 만든다.

# 직관

정사각형의 꼭짓점 $(0,0)$, $(1,0)$, $(1,1)$, $(0,1)$ 을 차례로 이은 닫힌 꺾은선을 놓는다. 변 $(0,0)\text{–}(1,0)$ 의 가운데에 새 점을 넣는데, 가운데 점 $(0.5,0)$ 을 쓰면 꺾은선이 그대로다. 그래서 변의 앞뒤 점까지 네 점 $(0,1)$, $(0,0)$, $(1,0)$, $(1,1)$ 을 쓴다.

네 점을 매개변수 $-1,0,1,2$ 에 놓고 그 네 점을 지나는 3차 곡선을 $1/2$ 에서 잰다. [다항식 보간](polynomial-interpolation.md)의 Lagrange 꼴에서 네 무게는 $-1/16$, $9/16$, $9/16$, $-1/16$ 이고, 새 점은 다음이다.

$$
-\frac1{16}(0,1)+\frac9{16}(0,0)+\frac9{16}(1,0)-\frac1{16}(1,1)=(0.5,-0.125)
$$

새 점은 변보다 $0.125$ 만큼 바깥에 있다. 네 변에 모두 넣으면 정사각형의 네 꼭짓점과 바깥으로 부푼 네 점이 번갈아 놓인 팔각형이다. 이것을 되풀이하면 점이 계속 늘어나고, 처음 네 꼭짓점을 모두 지나는 둥근 닫힌 곡선으로 수렴한다.

# 정의

꺾은선 $P_i$ 에 대해 4점 세분의 한 단계는 다음 두 종류의 점을 만든다[^1].

$$
P'\_{2i}=P_i,\qquad P'\_{2i+1}=\left(\frac12+w\right)(P_i+P_{i+1})-w\thinspace(P_{i-1}+P_{i+2})
$$

$w$ 를 장력(tension)이라 한다. $w=1/16$ 이면 직관 절의 무게이고, $w=0$ 이면 새 점이 변의 가운데 점이라 꺾은선이 바뀌지 않는다. 원래 점이 그대로 남는 세분을 **보간 세분(interpolatory subdivision)** 이라 한다.

```javascript
// 닫힌 꺾은선 points 에 4점 세분을 한 단계 한다. w 는 장력이다
function fourPointStep(points, w = 1 / 16) {
  const n = points.length;
  const out = [];
  for (let i = 0; i < n; i++) {
    const a = points[(i - 1 + n) % n], b = points[i];
    const c = points[(i + 1) % n], d = points[(i + 2) % n];
    out.push(b);
    out.push(b.map((_, k) => (0.5 + w) * (b[k] + c[k]) - w * (a[k] + d[k])));
  }
  return out;
}
```

# 성질

## 3차 다항식의 재생

$w=1/16$ 이고 $P_i=p(i)$ 가 3차 이하 다항식 $p$ 의 값이면 새 점은 $P'\_{2i+1}=p(i+1/2)$ 다. 네 점을 지나는 3차 이하 다항식은 하나뿐이므로 $p$ 자신이고, 새 점은 그 다항식의 $1/2$ 에서의 값이다. 그래서 극한 곡선은 $p$ 이고, 매끄러운 함수의 값에서 시작하면 극한과 원래 함수의 차가 점 간격 $h$ 의 $h^4$ 차수다.

## 매끄러움

$0\lt w\lt(\sqrt5-1)/8\approx 0.154$ 이면 극한 곡선은 한 번 연속 미분 가능하다[^1]. $w=1/16$ 이면 한 번 연속 미분 가능하지만 두 번 연속 미분 가능하지는 않다[^2]. 차수 $3$ 의 [B-스플라인](b-splines.md)으로 수렴하는 근사 세분이 두 번 연속 미분 가능한 것과 견주면, 점을 지나는 대신 매끄러움을 한 단계 잃는다.

## 기본 함수

점 하나만 $1$ 이고 나머지가 $0$ 인 자료 $P_i=\delta_{i0}$ 를 수 위의 값으로 보고 세분하면 극한 함수 $\varphi$ 가 나온다. $\varphi$ 는 정수에서 $\varphi(k)=\delta_{k0}$ 이고, $\lbrack -3,3\rbrack$ 밖에서 $0$ 이며, $\varphi(1/2)=9/16$, $\varphi(3/2)=-1/16$ 이다. 일반 자료의 극한은 다음 합이다.

$$
f(x)=\sum_{i}P_i\thinspace\varphi(x-i)
$$

이 $\varphi$ 를 Deslauriers–Dubuc 기본 함수(Deslauriers–Dubuc fundamental function)라 한다[^3]. 네 점 대신 $2k$ 점의 $2k-1$ 차 보간으로 새 점을 정하면 받침이 더 넓고 더 매끄러운 기본 함수가 나온다.

## Butterfly 세분

삼각형 그물에서는 모서리마다 새 점을 넣고 원래 점을 그대로 두는 butterfly 세분을 쓴다. 새 점은 모서리의 두 끝점에 $1/2$ 씩, 모서리를 낀 두 삼각형의 남은 꼭짓점에 $2w$ 씩, 그 두 삼각형에 붙은 네 삼각형의 바깥 꼭짓점에 $-w$ 씩 준 평균이다. 무게를 더하면 $1+4w-4w=1$ 이다. 보통 $w=1/16$ 을 쓴다[^4].

# 활용

- 점을 지나는 곡선 설계. 손으로 찍은 점이나 측정점을 반드시 지나는 곡선을 몇 단계의 덧셈과 상수배로 그린다. [세분 곡면](subdivision-surfaces.md)의 Catmull–Clark 세분처럼 점을 옮기는 방법과 달리 원래 점이 화면에 그대로 남는다.
- 보간 웨이블릿. 기본 함수 $\varphi$ 의 정수 평행이동과 절반 크기 평행이동으로 자료를 거친 값과 세부로 나누는 리프팅 구성의 예측 단계가 4점 세분의 새 점 규칙이다.
- 삼각형 그물의 보간. 3차원 측정으로 얻은 꼭짓점을 그대로 두고 그물을 잘게 나눌 때 butterfly 세분을 쓴다.

[^1]: N. Dyn, D. Levin, J. A. Gregory, "A 4-point interpolatory subdivision scheme for curve design", Computer Aided Geometric Design 4 (1987), 257–268.

[^2]: I. Daubechies, J. C. Lagarias, "Two-scale difference equations II. Local regularity, infinite products of matrices and fractals", SIAM Journal on Mathematical Analysis 23 (1992), 1031–1079.

[^3]: G. Deslauriers, S. Dubuc, "Symmetric iterative interpolation processes", Constructive Approximation 5 (1989), 49–68.

[^4]: N. Dyn, D. Levin, J. A. Gregory, "A butterfly subdivision scheme for surface interpolation with tension control", ACM Transactions on Graphics 9 (1990), 160–169.

# 연관 문서

## 선수지식

- [Chaikin 알고리즘](chaikin-algorithm.md)
- [다항식 보간](polynomial-interpolation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms
